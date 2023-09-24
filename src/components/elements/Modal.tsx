import {Talk} from "@/types/timetable";
import {CalendarIcon, MapPinIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {format, parseISO} from "date-fns";

type Props = {
  session: Talk,
  onClose: () => void,
}

const Modal = ({session, onClose}: Props) => {
  const speaker = session.speakers[0];

  return (
    <div className='fixed top-0 left-0 w-full h-full flex z-[60]' style={{'backgroundColor': 'rgba(17,28,59,0.5)'}}>
      <div>
        <div className='mt-28 lg:w-8/12 w-11/12 h-4/5 mx-auto bg-white rounded-lg shadow-lg opacity-100 overflow-y-scroll'>
          <div className='lg:p-6 p-4 text-alt-black relative'>
            <div className='sticky w-full lg:top-6 top-4'>
              <div className='flex justify-end'>
                <button onClick={onClose}>
                  <XMarkIcon className='lg:w-10 lg:h-10 w-6 h-6 hover:text-primary-500 bg-white border-2 border-alt-black rounded hover:border-primary-500'/>
                </button>
              </div>
            </div>
            <div className='text-2xl font-bold'>{session.title}</div>
            <div className='text-lg font-bold mt-2'>{session.speakers[0].name}</div>
            <div className='text-lg mt-2'>
              <CalendarIcon
                className='w-6 h-6 inline-block'/>{format(parseISO(session.slot.start), 'yyyy/MM/dd HH:mm')} ~ {format(parseISO(session.slot.end), 'HH:mm')} (Asia/Tokyo)
            </div>
            <div className='text-lg my-2'><MapPinIcon className='w-6 h-6 inline-block'/>{session.slot.room["ja-jp"]}
            </div>
            {
              session.content_locale === 'ja-jp' ?
                <div className='inline bg-primary-500 rounded-2xl text-alt-white px-2'>日本語</div> :
                <div className='inline bg-secondary-500 rounded-2xl text-alt-white px-2'>EN</div>
            }
            <div className='mt-6 w-full bg-secondary-100 rounded p-4'>{session.abstract}</div>
            <hr className='my-6 border-secondary-300'/>
            <div className='whitespace-pre-line'>{session.description}</div>
            <hr className='my-6 border-secondary-300'/>
            <div className='flex items-start gap-6'>
              {
                speaker.avatar &&
                <img src={speaker.avatar} alt={speaker.name} className='w-20 lg:w-32 lg:min-w-[128px] lg:max-w-[128px] min-w-[80px]' />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;