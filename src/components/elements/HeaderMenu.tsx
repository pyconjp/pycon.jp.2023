import {ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {useTranslation} from "react-i18next";

type Props = {
  parent: string;
  childPages: { label: string, url: string, isComingSoon?: boolean }[]
}

const HeaderMenu = ({parent, childPages}: Props) => {
  const {t} = useTranslation('MENU');

  return (
    <div className='relative'>
      <div className='peer text-secondary-600 font-bold py-auto cursor-pointer' suppressHydrationWarning>
        {parent}<ChevronDownIcon className='w-5 h-5 inline-block text-primary-200'/>
      </div>
      <div className='invisible hover:visible peer-hover:visible absolute -left-5'>
        <div className='flex flex-col bg-secondary-50 w-[246px] shadow rounded'>
          {
            childPages.map(({label, url, isComingSoon}, index) =>
              <div key={index}>
                {
                  !isComingSoon
                    ? <Link href={url}>
                      <div className='hover:bg-secondary-100 flex items-center py-2'>
                        <ChevronRightIcon className='w-5 h-5 ml-6 text-primary-400'/>
                        <span className='ml-2 text-alt-black' suppressHydrationWarning>{label}</span>
                      </div>
                    </Link>
                    : <div className='flex items-center py-2 opacity-75 bg-secondary-200'>
                      <ChevronRightIcon className='w-5 h-5 ml-6 text-primary-400'/>
                      <span className='ml-2 text-alt-black' suppressHydrationWarning>
                        {label}
                        <br/>
                        <span className='text-sm'>
                          ({t('COMING_SOON')})
                        </span>
                      </span>
                    </div>
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;