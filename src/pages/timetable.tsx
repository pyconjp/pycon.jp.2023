import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import axios, {AxiosResponse} from "axios";
import {Floor, Session, Day, ConferenceEvent} from "@/types/timetable";
import Timetable from "@/components/organisms/Timetable";
import {events} from "@/data/timetable";
import {useRouter} from "next/router";
import Modal from "@/components/elements/Modal";
import {useEffect} from "react";


type Props = {
  sessions: {
    "day1": Session[],
    "day2": Session[],
  },
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

  let selected: Session | undefined = undefined;
  let defaultDate: Day = DEFAULT_DAY;
  if (id) {
    if (sessions['day1'].some(session => session.code === id)) {
      selected = sessions['day1'].find(session => session.code === id);
      defaultDate = 'day1';
    } else if (sessions['day2'].some(session => session.code === id)) {
      selected = sessions['day2'].find(session => session.code === id);
      defaultDate = 'day2';
    }
  }

  const transient = async () => {
    await router.push(`/timetable`);
  }

  useEffect(() => {
    if (selected !== undefined) {
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
          <Timetable sessions={sessions} startDateTime={startDateTime} defaultDate={defaultDate ?? DEFAULT_DAY}/>
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

  const day1_4f = regular.filter(session => session.slot.start < DATE_THRESHOLD);
  const day1_20f = short.filter(session => session.slot.start < DATE_THRESHOLD);
  const day2_4f = regular.filter(session => session.slot.start >= DATE_THRESHOLD);
  const day2_20f = short.filter(session => session.slot.start >= DATE_THRESHOLD);

  const day1_events_starts = events.day1.map((event: ConferenceEvent) => event.start);
  const day2_events_starts = events.day2.map((event: ConferenceEvent) => event.start);

  return {
    props: {
      sessions: {
        "day1": [
          ...day1_4f,
          ...day1_20f,
        ],
        "day2": [
          ...day2_4f,
          ...day2_20f,
        ]
      },
      startDateTime: {
        "day1": {
          "4F": [
            ...getStartDateTime(day1_4f),
            ...day1_events_starts
          ].sort(),
          "20F": [
            ...getStartDateTime(day1_20f),
            ...day1_events_starts
          ].sort(),
        },
        "day2": {
          "4F": [
            ...getStartDateTime(day2_4f),
            ...day2_events_starts
          ].sort(),
          "20F": [
            ...getStartDateTime(day2_20f),
            ...day2_events_starts
          ].sort(),
        }
      },
    },
  }
}

export default TimeTable;
