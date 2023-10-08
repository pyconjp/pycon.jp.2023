import PageTitle from "@/components/elements/PageTitle";
import {Talk, Day, ConferenceEvent, Answer, Session} from "@/types/timetable";
import Timetable from "@/components/organisms/Timetable";
import {events} from "@/data/timetable";
import {useRouter} from "next/router";
import Modal from "@/components/elements/Modal";
import {useEffect} from "react";
import {
  fetchAnswers,
  fetchTalks,
  sortTalks,
  SUBMISSION_TYPE_REGULAR_TALK,
  SUBMISSION_TYPE_SHORT_TALK
} from "@/utils/pretalx";


type Props = {
  sessions: {
    "day1": (Talk | ConferenceEvent)[],
    "day2": (Talk | ConferenceEvent)[],
  },
  startTime: {
    "day1": {
      "4F": string[],
      "20F": string[],
    },
    "day2": {
      "4F": string[],
      "20F": string[],
    },
  },
  endTime: {
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

const TimeTable = ({sessions, startTime, endTime}: Props) => {
  const router = useRouter();
  const {id} = router.query;

  let selected: Talk | undefined = undefined;
  let defaultDate: Day = DEFAULT_DAY;
  if (id) {
    if (sessions['day1'].some(session => session.code === id)) {
      selected = sessions['day1'].find(session => session.code === id) as Talk;
      defaultDate = 'day1';
    } else if (sessions['day2'].some(session => session.code === id)) {
      selected = sessions['day2'].find(session => session.code === id) as Talk;
      defaultDate = 'day2';
    }
  }

  const transient = async () => {
    await router.push(`/timetable`, undefined, {shallow: true});
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
      <div>
        <PageTitle title='Timetable'/>
        <Timetable sessions={sessions} startTime={startTime} endTime={endTime}
                   defaultDate={defaultDate ?? DEFAULT_DAY}/>
        {selected && <Modal session={selected} onClose={transient}/>}
      </div>
    </>
  )
}


const getStartDateTime = (sessions: Session[]) => {
  const start = sessions
    .filter(session => session?.hide_start !== true)
    .map(session => session.slot.start);

  const result: string[] = [];
  start.forEach(s => !result.includes(s) && result.push(s));
  return result;
}

const getEndDateTime = (sessions: Session[]) => {
  const start = sessions
    .filter(session => session?.hide_end !== true)
    .map(session => session.slot.end);

  const result: string[] = [];
  start.forEach(s => !result.includes(s) && result.push(s));
  return result;
}

export const getStaticProps = async () => {
  const answers = await fetchAnswers();
  const contentLocales = answers.reduce(
    (acc: { [p: string]: string }, cur: Answer) => ({...acc, [cur.submission]: cur.answer}), {}
  );

  const regular = await fetchTalks(SUBMISSION_TYPE_REGULAR_TALK)
    .then(sessions => sessions.map(session => {
      session.content_locale = ['日本語', 'Japanese'].includes(contentLocales[session.code]) ? 'ja-jp' : 'en';
      return session;
    }));

  const short = await fetchTalks(SUBMISSION_TYPE_SHORT_TALK)
    .then(sessions => sessions.map(session => {
      session.content_locale = ['日本語', 'Japanese'].includes(contentLocales[session.code]) ? 'ja-jp' : 'en';
      return session;
    }));

  const day1_4f = regular.filter(session => session.slot.start < DATE_THRESHOLD);
  const day1_20f = short.filter(session => session.slot.start < DATE_THRESHOLD);
  const day2_4f = regular.filter(session => session.slot.start >= DATE_THRESHOLD);
  const day2_20f = short.filter(session => session.slot.start >= DATE_THRESHOLD);

  const day1_events_starts = getStartDateTime(events.day1);
  const day2_events_starts = getStartDateTime(events.day2);
  const day1_events_ends = getEndDateTime(events.day1);
  const day2_events_ends = getEndDateTime(events.day2);

  return {
    props: {
      sessions: {
        "day1": [
          ...day1_4f,
          ...day1_20f,
          ...events.day1,
        ].sort(sortTalks),
        "day2": [
          ...day2_4f,
          ...day2_20f,
          ...events.day2,
        ].sort(sortTalks)
      },
      startTime: {
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
      endTime: {
        "day1": {
          "4F": [
            ...getEndDateTime(day1_4f),
            ...day1_events_ends
          ].sort(),
          "20F": [
            ...getEndDateTime(day1_20f),
            ...day1_events_ends
          ].sort(),
        },
        "day2": {
          "4F": [
            ...getEndDateTime(day2_4f),
            ...day2_events_ends
          ].sort(),
          "20F": [
            ...getEndDateTime(day2_20f),
            ...day2_events_ends
          ].sort(),
        }
      },
    },
  }
}

export default TimeTable;
