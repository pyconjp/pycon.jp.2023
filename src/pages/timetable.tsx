import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import axios, {AxiosResponse} from "axios";
import {Floor, Session, Day} from "@/types/timetable";
import Timetable from "@/components/organisms/Timetable";
import {other} from "@/data/timetable";
import {useRouter} from "next/router";
import Modal from "@/components/elements/Modal";
import {useEffect} from "react";


type Props = {
  sessions: {
    "4F": Session[],
    "20F": Session[],
  };
  startDateTime: {
    "day1": {
      "4F": string[],
      "20F": string[],
    },
    "day2": {
      "4F": string[],
      "20F": string[],
    },
  }
}

const DATE_THRESHOLD = '2023-10-28T00:00:00+09:00';
const DEFAULT_DAY = 'day1';

const TimeTable = ({sessions, startDateTime}: Props) => {
  const router = useRouter();
  const {id} = router.query;

  let selected: Session | null = null;
  let defaultFloor: Floor = '4F';
  let defaultDate: Day = DEFAULT_DAY;
  if (id) {
    if (sessions['4F'].filter(session => session.code === id).length > 0) {
      selected = sessions['4F'].filter(session => session.code === id)[0];
      defaultFloor = '4F';
      defaultDate = selected.slot.start < DATE_THRESHOLD ? 'day1' : 'day2';
    } else if (sessions['20F'].filter(session => session.code === id).length > 0) {
      selected = sessions['20F'].filter(session => session.code === id)[0];
      defaultFloor = '20F';
      defaultDate = selected.slot.start < DATE_THRESHOLD ? 'day1' : 'day2';
    }
  }

  const transient = async () => {
    await router.push(`/timetable`);
  }

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selected]);

  return (
    <>
      <PageHead/>
      <div>
        <PageTitle title='Timetable'/>
        {
          router.isReady &&
          <Timetable sessions={sessions} selected={selected} startDateTime={startDateTime}
                     defaultFloor={defaultFloor ?? '4F'} defaultDate={defaultDate ?? DEFAULT_DAY}/>
        }
        {selected && <Modal session={selected} onClose={transient}/>}
      </div>
    </>
  )
}


const getStartDateTime = (sessions: Session[]) => {
  const start = sessions
    .map(session => session.slot.start);

  const result: string[] = [];
  start.forEach(s => !result.includes(s) && result.push(s));
  return result;
}

export const getStaticProps = async () => {
  const answers = await axios.get(
    'https://pretalx.com/api/events/pyconapac2023/answers',
    {
      params: {
        question: 2563, // 発表の言語
        limit: 300,
      },
      headers: {
        Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
      },
    },
  ).then(
    (response) => response.data.results
  );

  const contentLocales = answers.reduce((acc: any, cur: any) => ({...acc, [cur.submission]: cur.answer}), {});

  const regular = await axios.get(
    'https://pretalx.com/api/events/pyconapac2023/talks/',
    {
      params: {
        state: 'confirmed',
        submission_type: 2850, // 発表
        limit: 100,
      },
      headers: {
        Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
      },
    },
  ).then(
    (response: AxiosResponse<{ results: Session[] }>) => response.data.results
  ).then(sessions => sessions.map(session => {
    session.content_locale = ['日本語', 'Japanese'].includes(contentLocales[session.code]) ? 'ja-jp' : 'en';
    return session;
  }));

  const short = await axios.get(
    'https://pretalx.com/api/events/pyconapac2023/talks/',
    {
      params: {
        state: 'confirmed',
        submission_type: 3340, // 15 Minute Talk
        limit: 100,
      },
      headers: {
        Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
      },
    },
  ).then(
    (response: AxiosResponse<{ results: Session[] }>) => response.data.results
  ).then(sessions => sessions.map(session => {
    session.content_locale = ['日本語', 'Japanese'].includes(contentLocales[session.code]) ? 'ja-jp' : 'en';
    return session;
  }));

  return {
    props: {
      sessions: {
        "4F": regular, "20F": short,
      },
      startDateTime: {
        "day1": {
          "4F": [
            ...getStartDateTime(regular.filter(session => session.slot.start < DATE_THRESHOLD)),
            ...Object.keys(other['day1']['4F'])
          ].sort(),
          "20F": [
            ...getStartDateTime(short.filter(session => session.slot.start < DATE_THRESHOLD)),
            ...Object.keys(other['day1']['20F'])
          ].sort(),
        },
        "day2": {
          "4F": [
            ...getStartDateTime(regular.filter(session => session.slot.start >= DATE_THRESHOLD)),
            ...Object.keys(other['day2']['4F'])
          ].sort(),
          "20F": [
            ...getStartDateTime(short.filter(session => session.slot.start >= DATE_THRESHOLD)),
            ...Object.keys(other['day2']['20F'])
          ].sort(),
        }
      }
    },
  }
}

export default TimeTable;
