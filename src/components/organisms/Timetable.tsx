import cc from "classcat";
import {other, tracks} from "@/data/timetable";
import {Day, Floor, Session} from "@/types/timetable";
import {ClockIcon, MapPinIcon, TagIcon} from "@heroicons/react/20/solid";
import {format, parseISO} from "date-fns";
import ToggleButton from "@/components/elements/ToggleButton";
import {useState} from "react";
import {useRouter} from "next/router";

type Props = {
  sessions: {
    "4F": Session[],
    "20F": Session[],
  };
  selected: Session | null,
  startDateTime: {
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
  defaultFloor: Floor,
}

const Timetable = ({sessions, selected, startDateTime, defaultDate, defaultFloor}: Props) => {
  const [date, setDate] = useState<Day>(defaultDate);
  const [floor, setFloor] = useState<Floor>(defaultFloor);

  return (
    <>
      <ToggleButton<Day> buttons={[{label: 'Day1', value: 'day1'}, {label: 'Day2', value: 'day2'}]}
                         selected={date} onClick={setDate} variant={'secondary'}/>
      <ToggleButton<Floor> buttons={[{label: '4F', value: '4F'}, {label: '20F', value: '20F'}]}
                           selected={floor} onClick={setFloor} variant={'primary'}/>
      <div className={cc([
        'w-10/12',
        'mx-auto',
        'text-sm',
        'lg:grid',
        floor === '4F' ? 'lg:grid-cols-[8%_23%_23%_23%_23%]' : 'lg:grid-cols-[8%_92%]'
      ])}>
        <div className='hidden lg:block'/>
        {
          tracks[floor].map(
            (track, index) =>
              <div key={index}
                   className='text-lg text-center odd:bg-secondary-600 even:bg-secondary-800 text-alt-white m-0.5 py-1 rounded hidden lg:block'>
                {track}
              </div>
          )
        }
        {
          startDateTime[date][floor].map((start, index) => {
            const session_line = sessions[floor].filter(session => session.slot.start === start);
            if (!Object.hasOwn(other[date][floor], start)) {
              return <TalkLine key={index} sessions={session_line} floor={floor} start={start}/>;
            } else {
              return <OtherLine key={index} title={other[date][floor][start]} floor={floor} start={start}/>;
            }
          })
        }
      </div>
    </>
  );
}

const TalkLine = ({sessions, floor, start}: { sessions: Session[], floor: Floor, start: string }) =>
  <>
    <StartTime start={start}/>
    {
      tracks[floor].map(
        (track, index) =>
          <Talk
            key={index}
            session={sessions.find(session => session.slot.room["ja-JP"] === track)}
          />
      )
    }
  </>


const Talk = ({session}: { session?: Session }) => {
  const router = useRouter();
  const transient = async () => {
    await router.push(`/timetable?id=${session?.code}`);
  }

  return (
    session
      ? <div className='rounded lg:h-[200px] h-[170px] m-0.5'>
        <div className='px-4 py-2 rounded bg-secondary-100 h-full flex flex-col justify-between gap-4 cursor-pointer' onClick={transient}>
          <div>
            <div className='text-primary-700 font-bold overflow-hidden text-ellipsis max-h-[60px] inline-block'>
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
              <div className='text-alt-black lg:hidden'>
                <MapPinIcon className='w-4 h-4 inline'/>{session.slot.room["ja-JP"]}
              </div>
            </div>
          </div>
        </div>
      </div>
      : <div className='hidden lg:block'/>
  )
}

const OtherLine = ({title, floor, start}: { title: string, floor: Floor, start: string }) =>
  <>
    <StartTime start={start}/>
    <div
      className={cc({
        'text-lg': true,
        'text-center': true,
        'py-1': true,
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

const StartTime = ({start}: { start: string }) => (
  <div
    className={cc(
      [
        'font-bold',
        'text-center',
        'text-alt-white',
        'bg-secondary-600',
        'rounded',
        'mx-0.5',
        'mt-4',
        'text-lg',
        'lg:w-full',
        'lg:text-right',
        'lg:text-alt-black',
        'lg:bg-white',
        'lg:rounded-none',
        'lg:mx-0',
        'lg:mt-0',
        'lg:pb-auto',
        'lg:text-sm',
        'lg:pr-4',
        'lg:pt-1',
        'lg:border-t-2',
        'lg:border-secondary-300',
      ]
    )}>
    {format(parseISO(start), 'HH:mm')}
  </div>
)

export default Timetable