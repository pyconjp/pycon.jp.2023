import {useTranslation} from "react-i18next";
import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import axios, {AxiosResponse} from "axios";
import {Floor, Session, StartDateTime, Track} from "@/types/timetable";
import {useState} from "react";
import {ClockIcon, TagIcon} from "@heroicons/react/20/solid";

type Props = {
  sessions: Session[];
}

const DEFAULT_DAY = 'day1';

const START_TIME: { day1: StartDateTime[], day2: StartDateTime[] } = {
  day1: [
    "2022-10-14T10:00:00+09:00",
    "2022-10-14T10:30:00+09:00",
    "2022-10-14T11:30:00+09:00",
    "2022-10-14T13:00:00+09:00",
    "2022-10-14T13:50:00+09:00",
    "2022-10-14T14:40:00+09:00",
    "2022-10-14T15:30:00+09:00",
    "2022-10-14T16:20:00+09:00",
    "2022-10-14T17:10:00+09:00",
    "2022-10-14T18:00:00+09:00",
    "2022-10-14T18:30:00+09:00",
  ],
  day2: [
    "2022-10-15T10:00:00+09:00",
    "2022-10-15T10:30:00+09:00",
    "2022-10-15T11:30:00+09:00",
    "2022-10-15T13:00:00+09:00",
    "2022-10-15T13:50:00+09:00",
    "2022-10-15T14:40:00+09:00",
    "2022-10-15T15:10:00+09:00",
    "2022-10-15T16:00:00+09:00",
    "2022-10-15T16:50:00+09:00",
  ],
}

const TRACKS: { [key in Floor]: Track[] } = {
  "4F": [
    "pyconjp_1",
    "pyconjp_2",
    "pyconjp_3",
    "pyconjp_4",
  ],
  "20F": [
    "pyconjp_5",
  ],
};

const ACTIVE = 'bg-secondary-600 text-alt-white';
const INACTIVE = 'bg-secondary-100 text-alt-black';

const TimeTable = ({sessions}: Props) => {
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

        <div className='mx-24 flex flex-col gap-1 text-sm'>
          <div className='flex gap-2 text-lg'>
            {
              TRACKS[floor].map(
                (track, index) =>
                  <div key={index}
                       className='flex-1 text-center odd:bg-secondary-600 even:bg-secondary-800 text-alt-white py-1 rounded'>
                    {track}
                  </div>
              )
            }
          </div>
          {
            START_TIME[date].map((start, index) => {
              const session_line = sessions.filter(session => session.slot.start === start);
              if (session_line.length > 1) {
                return <TalkSessionLine key={index} sessions={session_line} floor={floor}/>;
              } else {
                return <ConferenceSessionLine key={index} session={session_line[0]}/>;
              }
            })
          }
        </div>
      </div>
    </>
  )
}

const TalkSessionLine = ({sessions, floor}: { sessions: Session[], floor: Floor }) =>
  <div className='flex gap-2 items-stretch'>
    {
      TRACKS[floor].map(
        (track, index) =>
          <TalkSession
            key={index}
            session={sessions.find(session => session.slot.room["ja-JP"] === track)}
          />
      )
    }
  </div>

const TalkSession = ({session}: { session?: Session }) =>
  <div className='rounded flex-1'>
    {
      session &&
      <div className='px-4 py-2 rounded bg-secondary-100 h-full flex flex-col justify-between gap-4'>
        <div>
          <div className='text-primary-700 font-bold'>
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

const ConferenceSessionLine = ({session}: { session: Session }) =>
  <div className='text-center py-2 bg-primary-600 text-alt-white font-bold rounded'>
    {session.title}
  </div>


export const getStaticProps = async () => {
  const sessions = await axios.get(
    'https://pretalx.com/api/events/pyconjp2022/submissions/',
    {
      params: {
        state: 'confirmed',
        limit: 100,
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
      sessions: sessions,
    },
  }
}

export default TimeTable;
