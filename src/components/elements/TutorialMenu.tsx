import {Talk} from "@/types/timetable";
import {useRouter} from "next/router";
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import {useTranslation} from "react-i18next";

type Props = {
  tutorials: Talk[];
}


const TutorialMenu = ({tutorials}: Props) => {
  const router = useRouter();
  const transition = async (url: string) => {
    await router.push(url);
  }

  const {t} = useTranslation('TUTORIAL');

  const MenuItem = ({title, url}: { title: string, url: string }) => (
    <div onClick={() => transition(url)}
         className='cursor-pointer px-4 hover:bg-secondary-600 flex items-center gap-2 h-16'>
      <ChevronRightIcon className='w-4 h-4'/>{title}
    </div>
  )

  return <div className='text-sm bg-secondary-700 text-alt-white flex flex-col lg:w-[350px] w-full'>
    <MenuItem title={t('INDEX')} url='/tutorial/'/>
    {tutorials.map(
      tutorial =>
        <MenuItem key={tutorial.code} title={tutorial.title} url={`/tutorial/${tutorial.code}/`}/>
    )}
  </div>
}

export default TutorialMenu;