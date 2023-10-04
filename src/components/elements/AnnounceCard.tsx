import {Announce} from "@/types/announce";
import {useTranslation} from "react-i18next";
import {ChevronRightIcon} from "@heroicons/react/20/solid";

const AnnounceCard = ({announce}: {
  announce: Announce
}) => {
  const {t} = useTranslation("ANNOUNCE");

  const onClick = () => {
    window.open(announce.url, "_blank");
  }

  return <div className='flex flex-row bg-primary-600 hover:bg-primary-800 text-alt-white items-center w-full rounded-xl shadow-2xl px-4 py-4 lg:py-2 hover:cursor-pointer gap-4 lg:justify-start justify-between' onClick={onClick}>
    <div className='mx-2'>
      {announce.icon}
    </div>
    <div className='flex-1 flex flex-row items-center gap-6'>
      <div className='font-bold text-lg lg:w-48'>
        {t(announce.title_key)}
      </div>
      <div className='text-sm flex-1 whitespace-pre-line hidden lg:block'>
        {t(announce.description_key)}
      </div>
    </div>
    <div className='mx-2'>
      <ChevronRightIcon className='w-6 h-6'/>
    </div>
  </div>
}

export default AnnounceCard;