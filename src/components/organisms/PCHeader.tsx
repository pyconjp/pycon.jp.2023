import Link from "next/link";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import HeaderMenu from "@/components/elements/HeaderMenu";
import menu from "@/data/menu";
import LangButton from "@/components/elements/LangButton";

const PCHeader = () => {
  const {t} = useTranslation();

  return (
    <div className='lg:flex hidden justify-between items-center mx-5 h-full'>
      <Link href="/">
        <Image src={'/logo.svg'} alt={'PyCon APAC 2023'} width={232} height={76}/>
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
        </ul>
      </nav>
      <LangButton/>
    </div>
  );
};

export default PCHeader;
