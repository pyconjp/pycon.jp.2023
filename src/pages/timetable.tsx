import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import axios, {AxiosResponse} from "axios";
import {Floor, Session, Track} from "@/types/timetable";
import {useState} from "react";
import {ClockIcon, TagIcon} from "@heroicons/react/20/solid";
import {format, parseISO} from "date-fns";
import cc from "classcat";


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

const DEFAULT_DAY = 'day1';

const OTHER: {
  day1: {
    "4F": { [key in string]: string },
    "20F": { [key in string]: string },
  },
  day2: {
    "4F": { [key in string]: string },
    "20F": { [key in string]: string },
  }
} = {
  day1: {
    "4F": {
      "2023-10-27T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-27T11:30:00+09:00": 'Break',
      "2023-10-27T12:10:00+09:00": 'Lunch',
      "2023-10-27T14:10:00+09:00": 'Break',
      "2023-10-27T14:50:00+09:00": 'Break',
      "2023-10-27T16:00:00+09:00": 'Break',
      "2023-10-27T16:40:00+09:00": 'Break',
      "2023-10-27T17:00:00+09:00": 'LT & Closing',
    },
    "20F": {
      "2023-10-27T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-27T11:30:00+09:00": 'Break',
      "2023-10-27T11:55:00+09:00": 'Break',
      "2023-10-27T12:20:00+09:00": 'Lunch',
      "2023-10-27T13:40:00+09:00": 'Break',
      "2023-10-27T14:20:00+09:00": 'Break',
      "2023-10-27T14:45:00+09:00": 'Break',
      "2023-10-27T15:45:00+09:00": 'Break',
      "2023-10-27T16:10:00+09:00": 'Break',
      "2023-10-27T16:35:00+09:00": 'Break',
      "2023-10-27T17:00:00+09:00": 'LT & Closing',
    },
  },
  day2: {
    "4F": {
      "2023-10-28T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-28T11:20:00+09:00": 'Break',
      "2023-10-28T12:00:00+09:00": 'Lunch',
      "2023-10-28T14:00:00+09:00": 'Break',
      "2023-10-28T14:40:00+09:00": 'Break',
      "2023-10-28T15:50:00+09:00": 'Break',
      "2023-10-28T16:30:00+09:00": 'Break',
      "2023-10-28T16:40:00+09:00": 'LT & Closing',
      "2023-10-28T17:40:00+09:00": 'Break',
      "2023-10-28T18:00:00+09:00": 'Party 🥳',
    },
    "20F": {
      "2023-10-28T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-28T11:20:00+09:00": 'Break',
      "2023-10-28T11:45:00+09:00": 'Break',
      "2023-10-28T12:10:00+09:00": 'Lunch',
      "2023-10-28T13:45:00+09:00": 'Break',
      "2023-10-28T14:10:00+09:00": 'Break',
      "2023-10-28T14:35:00+09:00": 'Break',
      "2023-10-28T16:00:00+09:00": 'Break',
      "2023-10-28T16:25:00+09:00": 'Break',
      "2023-10-28T16:40:00+09:00": 'LT & Closing',
      "2023-10-28T17:40:00+09:00": 'Break',
      "2023-10-28T18:00:00+09:00": 'Party 🥳',
    },
  }
}


const TRACKS: { [key in Floor]: Track[] } = {
  "4F": [
    "track 1",
    "track 2",
    "track 3",
    "track 4",
  ],
  "20F": [
    "track 5",
  ],
};

const ACTIVE = 'bg-secondary-600 text-alt-white';
const INACTIVE = 'bg-secondary-100 text-alt-black';

const TimeTable = ({sessions, startDateTime}: Props) => {
  const [date, setDate] = useState<'day1' | 'day2'>(DEFAULT_DAY);
  const [floor, setFloor] = useState<Floor>('4F');

  return (
    <>
      <PageHead/>
      <div>
        <PageTitle title='Timetable'/>

        <div className='flex gap-6 w-full text-2xl mb-4 px-24'>
          <button className={'rounded-2xl flex-1 py-2 shadow ' + (date === 'day1' ? ACTIVE : INACTIVE)}
                  onClick={() => setDate('day1')}>
            Day1
          </button>
          <button className={'rounded-2xl flex-1 py-2 shadow ' + (date === 'day2' ? ACTIVE : INACTIVE)}
                  onClick={() => setDate('day2')}>
            Day2
          </button>
        </div>

        <div className='flex gap-6 w-full text-2xl mb-4 px-24'>
          <button className={'rounded-2xl flex-1 py-2 shadow ' + (floor === '4F' ? ACTIVE : INACTIVE)}
                  onClick={() => setFloor('4F')}>
            4F
          </button>
          <button className={'rounded-2xl flex-1 py-2 shadow ' + (floor === '20F' ? ACTIVE : INACTIVE)}
                  onClick={() => setFloor('20F')}>
            20F
          </button>
        </div>

        <div className={cc([
          'mx-24',
          'grid',
          'text-sm',
          floor === '4F' ? 'grid-cols-[8%_23%_23%_23%_23%]' : 'grid-cols-[8%_92%]'
        ])}>
          <div/>
          {
            TRACKS[floor].map(
              (track, index) =>
                <div key={index}
                     className='text-lg text-center odd:bg-secondary-600 even:bg-secondary-800 text-alt-white m-0.5 py-1 rounded'>
                  {track}
                </div>
            )
          }
          {
            startDateTime[date][floor].map((start, index) => {
              const session_line = sessions[floor].filter(session => session.slot.start === start);
              if (!Object.hasOwn(OTHER[date][floor], start)) {
                return <TalkLine key={index} sessions={session_line} floor={floor} start={start}/>;
              } else {
                return <OtherLine key={index} title={OTHER[date][floor][start]} floor={floor} start={start}/>;
              }
            })
          }
        </div>
      </div>
    </>
  )
}

const TalkLine = ({sessions, floor, start}: { sessions: Session[], floor: Floor, start: string }) =>
  <>
    <div
      className='w-full text-right text-alt-black pr-4 pt-1 font-bold border-t-2 border-secondary-300'>{format(parseISO(start), 'HH:mm')}</div>
    {
      TRACKS[floor].map(
        (track, index) =>
          <Talk
            key={index}
            session={sessions.find(session => session.slot.room["ja-JP"] === track)}
          />
      )
    }
  </>


const Talk = ({session}: { session?: Session }) =>
  <div className='rounded h-[200px] m-0.5'>
    {
      session &&
      <div className='px-4 py-2 rounded bg-secondary-100 h-full flex flex-col justify-between gap-4'>
        <div>
          <div className='text-primary-700 font-bold overflow-hidden text-ellipsis max-h-[100px] inline-block'>
            {session.title}
          </div>
          <div className='text-alt-black'>
            {session.speakers.length > 0 && session.speakers[0].name}
          </div>
        </div>
        <div>
          <div className='text-alt-black mb-1'>
            <TagIcon className='w-4 h-4 inline'/>{session.track["ja-JP"]}
          </div>
          <div className='inline-flex flex-row gap-2'>
            <div className='text-alt-black'>
              {
                session.content_locale === 'ja-JP' ?
                  <div className='inline bg-primary-500 rounded-2xl text-alt-white px-2'>日本語</div> :
                  <div className='inline bg-secondary-500 rounded-2xl text-alt-white px-2'>EN</div>
              }
            </div>
            <div className='text-alt-black'>
              <ClockIcon className='w-4 h-4 inline'/>{session.duration}min
            </div>
          </div>
        </div>
      </div>
    }
  </div>

const OtherLine = ({title, floor, start}: { title: string, floor: Floor, start: string }) =>
  <>
    <div
      className='w-full text-right text-alt-black pr-4 pt-1 font-bold border-t-2 border-secondary-300'>{format(parseISO(start), 'HH:mm')}</div>
    <div
      className={cc({
        'text-center': true,
        'py-2': true,
        'bg-primary-600': true,
        'text-alt-white': true,
        'font-bold': true,
        'rounded': true,
        'm-0.5': true,
        'col-span-4': floor === '4F',
      })}>
      {title}
    </div>
  </>

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

  const day1RegularStart = regular
    .filter(session => session.slot.start < '2023-10-28T00:00:00+09:00')
    .map(session => session.slot.start);

  return {
    props: {
      sessions: {
        "4F": regular, "20F": short,
      },
      startDateTime: {
        "day1": {
          "4F": [
            ...getStartDateTime(regular.filter(session => session.slot.start < '2023-10-28T00:00:00+09:00')),
            ...Object.keys(OTHER['day1']['4F'])
          ].sort(),
          "20F": [
            ...getStartDateTime(short.filter(session => session.slot.start < '2023-10-28T00:00:00+09:00')),
            ...Object.keys(OTHER['day1']['20F'])
          ].sort(),
        },
        "day2": {
          "4F": [
            ...getStartDateTime(regular.filter(session => session.slot.start >= '2023-10-28T00:00:00+09:00')),
            ...Object.keys(OTHER['day2']['4F'])
          ].sort(),
          "20F": [
            ...getStartDateTime(short.filter(session => session.slot.start >= '2023-10-28T00:00:00+09:00')),
            ...Object.keys(OTHER['day2']['20F'])
          ].sort(),
        }
      }
    },
  }
}

export default TimeTable;
