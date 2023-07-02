import Link from "next/link";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import {Bars3Icon, ChevronRightIcon, GlobeAltIcon, MinusIcon, XMarkIcon} from "@heroicons/react/20/solid";
import HeaderMenu from "@/components/elements/HeaderMenu";
import menu from "@/data/menu";
import {useContext, useState} from "react";
import menuContext from "@/utils/menuContext";
import LangButton from "@/components/elements/LangButton";

const PCHeader = () => {
  const {t, i18n} = useTranslation('PAGES');
  const {t: mt} = useTranslation('MENU');

  const {isMenuOpen, setIsMenuOpen} = useContext(menuContext);

  return (
    <>
      {
        isMenuOpen ? (
          <div className='block lg:hidden w-screen min-h-screen bg-white z-40 absolute'>
            <button className='float-right mr-5 mt-5'>
              <XMarkIcon className='h-12 text-primary-500 z-50' onClick={() => setIsMenuOpen(false)}/>
            </button>
            <nav className='mt-16 mx-14 py-1 bg-secondary-50 rounded flex lg:hidden flex-col shadow'>
              <ul>
                {
                  menu.map((m, index) => (
                    <>
                      <li className='pl-6 flex lg:hidden items-center gap-2.5 h-10'>
                        <ChevronRightIcon className='h-5 w-5 text-primary-400'/>
                        <div className='text-alt-black'>{t(m.title)}</div>
                      </li>
                      {m.children.map((c, index) => (
                        <li key={index} className='pl-10 flex lg:hidden items-center gap-2.5 h-10'>
                          <MinusIcon className='h-6 w-6 text-primary-400 scale-x-125'/>
                          <Link href={c.url}>
                            <div className='text-alt-black'>{mt(c.title)}</div>
                          </Link>
                        </li>
                      ))}
                    </>
                  ))
                }
              </ul>
            </nav>
            <div className='flex justify-center mt-8'>
              <LangButton/>
            </div>
          </div>
        ) : (
          <div className='lg:hidden flex items-center justify-between mx-5 h-full'>
            <Link href="/">
              <div className='flex items-center justify-between gap-8'>
                <Image src={'/sp_logo.svg'} alt={'PyCon APAC 2023'} width={37} height={57}/>
                <div className='text-alt-black font-montserrat italic text-lg'>
                  PyCon APAC 2023
                </div>
              </div>
            </Link>
            <button className='w-11 h-9 rounded bg-primary-100' onClick={() => setIsMenuOpen(true)}>
              <Bars3Icon className='h-6 text-primary-800 mx-auto'/>
            </button>
          </div>
        )
      }
    </>
  );
};

export default PCHeader;
