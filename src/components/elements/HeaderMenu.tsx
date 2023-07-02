import {ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  parent: string;
  childPages: { label: string, url: string }[]
}

const HeaderMenu = ({parent, childPages}: Props) => {

  return (
    <div className='relative'>
      <div className='peer text-secondary-600 font-bold py-auto' suppressHydrationWarning>
        {parent}<ChevronDownIcon className='w-5 h-5 inline-block text-primary-200'/>
      </div>
      <div className='invisible hover:visible peer-hover:visible absolute -left-5'>
        <div className='flex flex-col bg-secondary-50 w-[246px] shadow rounded'>
          {
            childPages.map(({label, url}, index) =>
              <Link href={url} key={index}>
                <div className='hover:bg-secondary-100 flex items-center py-2'>
                  <ChevronRightIcon className='w-5 h-5 ml-6 text-primary-400'/>
                  <span className='ml-2 text-alt-black'>{label}</span>
                </div>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;