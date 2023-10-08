import {Talk} from "@/types/timetable";
import {CalendarIcon, MapPinIcon} from "@heroicons/react/20/solid";
import {format, parseISO} from "date-fns";

type Props = {
  talk: Talk,
}

const TalkContent = ({talk}: Props) => {
  return (
    <>
      <div className='text-2xl font-bold'>{talk.title}</div>
      <div className='text-lg font-bold mt-2'>{talk.speakers.map((speaker) => speaker.name).join(' / ')}</div>
      <div className='text-lg mt-2'>
        <CalendarIcon
          className='w-6 h-6 inline-block'/>{format(parseISO(talk.slot.start), 'yyyy/MM/dd HH:mm')} ~ {format(parseISO(talk.slot.end), 'HH:mm')} (Asia/Tokyo)
      </div>
      <div className='text-lg my-2'><MapPinIcon className='w-6 h-6 inline-block'/>{talk.slot.room["ja-jp"]}
      </div>
      {
        talk.content_locale === 'ja-jp' ?
          <div className='inline bg-primary-500 rounded-2xl text-alt-white px-2'>日本語</div> :
          <div className='inline bg-secondary-500 rounded-2xl text-alt-white px-2'>EN</div>
      }
      <div className='mt-6 w-full bg-secondary-100 rounded p-4'>{talk.abstract}</div>
      <hr className='my-6 border-secondary-300'/>
      <div className='whitespace-pre-line'>{talk.description}</div>
      <hr className='my-6 border-secondary-300'/>
      <div className="flex gap-8 flex-col">
        {
          talk.speakers.map((speaker, index) => (
            <div key={index} className='flex items-start gap-6'>
              {
                speaker.avatar &&
                <img src={speaker.avatar} alt={speaker.name}
                     className='w-20 lg:w-32 lg:min-w-[128px] lg:max-w-[128px] min-w-[80px]'/>
              }
              <div className='flex-auto'>
                <div className='text-xl'>
                  {speaker.name}
                </div>
                <div className='whitespace-pre-line pt-2'>
                  {speaker.biography}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default TalkContent;