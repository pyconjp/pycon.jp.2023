import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import axios, {AxiosResponse} from "axios";
import {Day, Floor, Session, Track} from "@/types/timetable";
import {useState} from "react";
import {ClockIcon, MapPinIcon, TagIcon} from "@heroicons/react/20/solid";
import {format, parseISO} from "date-fns";
import cc from "classcat";
import Timetable from "@/components/organisms/Timetable";
import {da} from "date-fns/locale";
import {other} from "@/data/timetable";
import ToggleButton from "@/components/elements/ToggleButton";


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

const ACTIVE = {day: 'bg-primary-600 text-alt-white', floor: 'bg-secondary-600 text-alt-white'};
const INACTIVE = {day: 'bg-primary-100 text-alt-black', floor: 'bg-secondary-100 text-alt-black'};

const BUTTON_CLASS = {
  'rounded-2xl': true,
  'flex-1': true,
  'py-2': true,
  'shadow': true,
}

const TimeTable = ({sessions, startDateTime}: Props) => {
  const [date, setDate] = useState<Day>(DEFAULT_DAY);
  const [floor, setFloor] = useState<Floor>('4F');

  return (
    <>
      <PageHead/>
      <div>
        <PageTitle title='Timetable'/>

        <ToggleButton<Day> buttons={[{label: 'Day1', value: 'day1'}, {label: 'Day2', value: 'day2'}]}
                           selected={date} onClick={setDate} variant={'secondary'}/>
        <ToggleButton<Floor> buttons={[{label: '4F', value: '4F'}, {label: '20F', value: '20F'}]}
                             selected={floor} onClick={setFloor} variant={'primary'}/>

        <Timetable sessions={sessions} startDateTime={startDateTime} floor={floor} date={date}/>
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
  const regular = await axios.get(
    'https://pretalx.com/api/events/pyconapac2023/talks/',
    {
      params: {
        state: 'confirmed',
        limit: 100,
        submission_type: 2850,
      },
      headers: {
        Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
      },
    },
  ).then(
    (response: AxiosResponse<{ results: Session[] }>) => response.data.results
  );

  const short = await axios.get(
    'https://pretalx.com/api/events/pyconapac2023/talks/',
    {
      params: {
        state: 'confirmed',
        limit: 100,
        submission_type: 3340,
      },
      headers: {
        Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
      },
    },
  ).then(
    (response: AxiosResponse<{ results: Session[] }>) => response.data.results
  );

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
