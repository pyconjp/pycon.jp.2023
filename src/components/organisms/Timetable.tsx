import cc from "classcat";
import {tracks} from "@/data/timetable";
import {ConferenceEvent, Day, Talk} from "@/types/timetable";
import {CalendarIcon, ClockIcon, MapPinIcon} from "@heroicons/react/20/solid";
import {format, parseISO} from "date-fns";
import ToggleButton from "@/components/elements/ToggleButton";
import {useState} from "react";
import {useRouter} from "next/router";
import {differenceInMinutes} from "date-fns";

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
  },
  defaultDate: Day,
}

const col = {
  "": 1,
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
        date === 'day1' ? 'lg:grid-rows-timetable1' : 'lg:grid-rows-timetable2',
      ])} suppressHydrationWarning>
        {
          tracks.map(
            ({label}, index) =>
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
                  {label}
                </div>
              </div>
          )
        }
        {sessions[date].map((session, index) =>
          session.slot.room['ja-jp'] !== ""
            ? <Talk key={index} session={session as Talk} conferenceStartAt={CONFERENCE_START[date]}/>
            : <ConferenceEvent key={index} event={session as ConferenceEvent} conferenceStartAt={CONFERENCE_START[date]}/>)}

        {startTime[date]["4F"].map((time, index) =>
          <StartTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"4F"}/>)}
        {startTime[date]["20F"].map((time, index) =>
          <StartTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"20F"}/>)}

        {endTime[date]["4F"].map((time, index) =>
          <EndTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"4F"}/>)}
        {endTime[date]["20F"].map((time, index) =>
          <EndTime key={index} time={time} conferenceStartAt={CONFERENCE_START[date]} floor={"20F"}/>)}
      </div>
    </>
  );
}

const Talk = ({session, conferenceStartAt}: {
  session: Talk,
  conferenceStartAt: Date
}) => {
  const router = useRouter();
  const transient = async () => {
    await router.push(`/timetable?id=${session?.code}`, undefined, {shallow: true});
  }

  return <div className='rounded m-0.5 h-full'
              style={{
                gridColumn: `${col[session.slot.room["ja-jp"]]} / span 1`,
                gridRow: `${differenceInMinutes(parseISO(session.slot.start), conferenceStartAt) / 5 + 2} / span ${differenceInMinutes(parseISO(session.slot.end), parseISO(session.slot.start)) / 5}`
              }}>
    <div className='px-4 py-2 rounded bg-secondary-100 h-full flex flex-col justify-between cursor-pointer'
         onClick={transient}>
      <div>
        <div className={cc([
          'text-primary-700',
          'font-bold',
          'overflow-hidden',
          'text-ellipsis',
          session.slot.room['ja-jp'] === 'track 5' ? 'lg:max-h-[40px]' : 'lg:max-h-[140px]',
          'inline-block',
        ])}>
          {session.title}
        </div>
        <div className='text-alt-black'>
          {session.speakers.map((speaker) => speaker.name).join(' / ')}
        </div>
      </div>
      <div>
        <div className='text-alt-black mb-1 text-xs lg:hidden flex items-center gap-1 font-bold'>
          <CalendarIcon className='w-4 h-4 inline'/>
          <div>{format(parseISO(session.slot.start), 'HH:mm')} - {format(parseISO(session.slot.end), 'HH:mm')} (JST)</div>
        </div>
        <div className='inline-flex flex-row gap-2'>
          <div className='text-alt-black'>
            {
              session.content_locale === 'ja-jp' ?
                <div className='inline bg-primary-500 rounded-2xl text-alt-white px-2 text-xs'>日本語</div> :
                <div className='inline bg-secondary-500 rounded-2xl text-alt-white px-2 text-xs'>EN</div>
            }
          </div>
          <div className='text-alt-black flex items-center gap-1'>
            <ClockIcon className='w-4 h-4 inline'/>
            <div>{session.duration}min</div>
          </div>
          <div className='text-alt-black lg:hidden flex items-center gap-1'>
            <MapPinIcon className='w-4 h-4 inline'/>
            <div>{tracks.find(t => t.value === session.slot.room["ja-jp"])?.label}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const StartTime = ({time, conferenceStartAt, floor}: {
  time: string,
  conferenceStartAt: Date,
  floor: "4F" | "20F"
}) => {
  const d = parseISO(time);

  return <div
    className={cc(
      [
        'font-bold',
        'w-full',
        'text-alt-black',
        'bg-white',
        'rounded-none',
        'pb-auto',
        'text-sm',
        'border-t-2',
        'border-secondary-300',
        'relative',
        'hidden',
        'lg:block',
      ]
    )}
    style={{
      gridColumn: `${floor === "4F" ? 1 : 7} / span 1`,
      gridRow: `${differenceInMinutes(d, conferenceStartAt) / 5 + 2} / span 1`
    }}
  >
    <div className='lg:absolute lg:top-0 lg:left-1/3'>
      {format(d, 'HH:mm')}
    </div>
  </div>

}

const EndTime = ({time, conferenceStartAt, floor}: {
  time: string,
  conferenceStartAt: Date,
  floor: "4F" | "20F"
}) => {
  const d = parseISO(time);

  return <div
    className={cc(
      [
        'font-bold',
        'w-full',
        'text-alt-black',
        'bg-white',
        'rounded-none',
        'pb-auto',
        'text-sm',
        'border-b-2',
        'border-secondary-300',
        'relative',
        'hidden',
        'lg:block',
      ]
    )}
    style={{
      gridColumn: `${floor === "4F" ? 1 : 7} / span 1`,
      gridRow: `${differenceInMinutes(d, conferenceStartAt) / 5 + 1} / span 1`
    }}
  >
    <div className='lg:absolute lg:bottom-0 lg:left-1/3'>
      {format(d, 'HH:mm')}
    </div>
  </div>

}


const ConferenceEvent = ({event, conferenceStartAt}: {
  event: ConferenceEvent,
  conferenceStartAt: Date
}) =>
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
      gridRow: `${differenceInMinutes(parseISO(event.slot.start), conferenceStartAt) / 5 + 2} / span ${differenceInMinutes(parseISO(event.slot.end), parseISO(event.slot.start)) / 5}`
    }}
  >
    <div>
      {event.title}
      <div className='block lg:hidden'>
        <div>{format(parseISO(event.slot.start), 'HH:mm')} - {format(parseISO(event.slot.end), 'HH:mm')} (JST)</div>
      </div>
    </div>
  </div>

export default Timetable