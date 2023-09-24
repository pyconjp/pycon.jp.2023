import cc from "classcat";
import {events, tracks} from "@/data/timetable";
import {ConferenceEvent, Day, Floor, Session} from "@/types/timetable";
import {ClockIcon, MapPinIcon, TagIcon} from "@heroicons/react/20/solid";
import {format, parseISO} from "date-fns";
import ToggleButton from "@/components/elements/ToggleButton";
import {useState} from "react";
import {useRouter} from "next/router";
import {differenceInMinutes} from "date-fns";

type Props = {
  sessions: {
    "day1": Session[],
    "day2": Session[],
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
  },
  defaultDate: Day,
}

const col = {
  'track 1': 2,
  'track 2': 3,
  'track 3': 4,
  'track 4': 5,
  'track 5': 6,
}

const CONFERENCE_START = {
  day1: new Date('2023-10-27T10:00:00+09:00'),
  day2: new Date('2023-10-28T10:00:00+09:00'),
};

const Timetable = ({sessions, startTime, endTime, defaultDate}: Props) => {
  const [date, setDate] = useState<Day>(defaultDate);

  return (
    <>
      <ToggleButton selected={date} onClick={setDate}/>

      <div className={cc([
        'w-10/12',
        'mx-auto',
        'text-sm',
        'lg:grid',
        'lg:grid-cols-timetable',
        date === 'day1' ? 'lg:grid-rows-timetable1': 'lg:grid-rows-timetable2',
      ])} suppressHydrationWarning>
        {
          tracks.map(
            (track, index) =>
              <div key={index}
                   className={cc([
                     'text-lg',
                     'text-center',
                     'odd:bg-secondary-600',
                     'even:bg-secondary-800',
                     'text-alt-white',
                     'm-0.5',
                     'py-1',
                     'rounded',
                     'hidden',
                     'lg:block',
                   ])}
                   style={{gridColumn: `${index + 2} / span 1`}}
              >
                <div className='py-auto'>
                  {track}
                </div>
              </div>
          )
        }
        {sessions[date].map((session, index) =>
          <Talk key={index} session={session} conferenceStartAt={CONFERENCE_START[date]}/>)}

        {startTime[date]["4F"].map((time, index) =>
          <StartTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"4F"}/>)}
        {startTime[date]["20F"].map((time, index) =>
          <StartTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"20F"}/>)}

        {endTime[date]["4F"].map((time, index) =>
          <EndTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"4F"}/>)}
        {endTime[date]["20F"].map((time, index) =>
          <EndTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"20F"}/>)}

        {events[date].map((event, index) =>
          <OtherLine key={index} event={event} conferenceStartAt={CONFERENCE_START[date]}/>)}
      </div>
    </>
  );
}

const Talk = ({session, conferenceStartAt}: { session: Session, conferenceStartAt: Date }) => {
  const router = useRouter();
  const transient = async () => {
    await router.push(`/timetable?id=${session?.code}`);
  }

  return <div className='rounded m-0.5 h-full'
              style={{
                gridColumn: `${col[session.slot.room["ja-jp"]]} / span 1`,
                gridRow: `${differenceInMinutes(parseISO(session.slot.start), conferenceStartAt) / 5 + 2} / span ${differenceInMinutes(parseISO(session.slot.end), parseISO(session.slot.start)) / 5}`
              }}
  >
    <div className='px-4 py-2 rounded bg-secondary-100 h-full flex flex-col justify-between gap-4 cursor-pointer'
         onClick={transient}>
      <div>
        <div className={cc([
          'text-primary-700',
          'font-bold',
          'overflow-hidden',
          'text-ellipsis',
          session.slot.room['ja-jp'] === 'track 5' ? 'max-h-[40px]' : 'max-h-[140px]',
          'inline-block',
        ])}>
          {session.title}
        </div>
        <div className='text-alt-black'>
          {session.speakers.length > 0 && session.speakers[0].name}
        </div>
      </div>
      <div>
        {/*<div className='text-alt-black mb-1 text-xs'>*/}
        {/*  <TagIcon className='w-3 h-3 inline'/>{session.track["ja-jp"]}*/}
        {/*</div>*/}
        <div className='inline-flex flex-row gap-2'>
          <div className='text-alt-black'>
            {
              session.content_locale === 'ja-jp' ?
                <div className='inline bg-primary-500 rounded-2xl text-alt-white px-2 text-xs'>日本語</div> :
                <div className='inline bg-secondary-500 rounded-2xl text-alt-white px-2 text-xs'>EN</div>
            }
          </div>
          <div className='text-alt-black'>
            <ClockIcon className='w-4 h-4 inline'/>{session.duration}min
          </div>
          <div className='text-alt-black lg:hidden'>
            <MapPinIcon className='w-4 h-4 inline'/>{session.slot.room["ja-jp"]}
          </div>
        </div>
      </div>
    </div>
  </div>
}

const StartTime = ({time, conferenceStartAt, floor}: { time: string, conferenceStartAt: Date, floor: "4F" | "20F" }) => {
  const d = parseISO(time);

  return <div
    className={cc(
      [
        'font-bold',
        'text-center',
        'text-alt-white',
        'bg-secondary-600',
        'rounded',
        'mx-0.5',
        'mt-0',
        'text-lg',
        'lg:w-full',
        'lg:text-alt-black',
        'lg:bg-white',
        'lg:rounded-none',
        'lg:pb-auto',
        'lg:text-sm',
        'lg:border-t-2',
        'lg:border-secondary-300',
        'lg:relative',
      ]
    )}
    style={{
      gridColumn: `${floor === "4F" ? 1 : 7} / span 1`,
      gridRow: `${differenceInMinutes(d, conferenceStartAt) / 5 + 2} / span 1`
    }}
  >
    <div className='lg:absolute lg:top-0 lg:left-1/2'>
      {format(d, 'HH:mm')}
    </div>
  </div>

}

const EndTime = ({time, conferenceStartAt, floor}: { time: string, conferenceStartAt: Date, floor: "4F" | "20F" }) => {
  const d = parseISO(time);

  return <div
    className={cc(
      [
        'font-bold',
        'text-center',
        'text-alt-white',
        'bg-secondary-600',
        'rounded',
        'mx-0.5',
        'mt-auto',
        'text-lg',
        'lg:w-full',
        'lg:text-alt-black',
        'lg:bg-white',
        'lg:rounded-none',
        'lg:pb-auto',
        'lg:text-sm',
        'lg:border-b-2',
        'lg:border-secondary-300',
        'lg:relative',
      ]
    )}
    style={{
      gridColumn: `${floor === "4F" ? 1 : 7} / span 1`,
      gridRow: `${differenceInMinutes(d, conferenceStartAt) / 5 + 1} / span 1`
    }}
  >
    <div className='lg:absolute lg:bottom-0 lg:left-1/2'>
      {format(d, 'HH:mm')}
    </div>
  </div>

}


const OtherLine = ({event, conferenceStartAt}: { event: ConferenceEvent, conferenceStartAt: Date }) =>
  <div
    className={cc([
      'text-lg',
      'text-center',
      'py-1',
      'bg-primary-600',
      'text-alt-white',
      'font-bold',
      'rounded',
      'm-1',
      'flex',
      'justify-center',
      'items-center',
    ])}
    style={{
      gridColumn: `2 / span 5`,
      gridRow: `${differenceInMinutes(parseISO(event.start), conferenceStartAt) / 5 + 2} / span ${differenceInMinutes(parseISO(event.end), parseISO(event.start)) / 5}`
    }}
  >
    <div>
      {event.title}
    </div>
  </div>

export default Timetable