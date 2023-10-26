import Link from "next/link";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import HeaderMenu from "@/components/elements/HeaderMenu";
import menu from "@/data/menu";
import LangButton from "@/components/elements/LangButton";
import {VideoCameraIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";

const PCHeader = () => {
  const {t} = useTranslation();
  const router = useRouter();

  return (
    <div className='lg:flex hidden justify-between items-center mx-5 h-full'>
      <Link href="/">
        <Image src={'/long_light.png'} alt={'PyCon APAC 2023'} width={200} height={80}/>
      </Link>
      <nav className='flex-1 ml-8 mr-5'>
        <ul className="flex flex-row justify-between mx-auto items-center">
          {
            menu.map((m, index) => (
              <li className='flex-1' key={index}>
                <HeaderMenu
                  parent={t(m.title, {ns: 'PAGES'})}
                  childPages={
                    m.children.map(
                      (c) => (
                        {label: t(c.title, {ns: 'MENU'}), url: c.url, isComingSoon: c.isComingSoon}
                      )
                    )
                  }/>
              </li>
            ))
          }
          <li>
            <div
              onClick={() => router.push('/live')}
              className='text-xl font-bold bg-primary-500 hover:bg-primary-600 text-alt-white rounded-2xl px-4 py-2 flex gap-2 items-center cursor-pointer'>
              <VideoCameraIcon className='w-6 h-6'/>
              <div>
                {t('Live', {ns: 'PAGES'})}
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <LangButton/>
    </div>
  );
};

export default PCHeader;
