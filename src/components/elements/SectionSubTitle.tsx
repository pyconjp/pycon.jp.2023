import React from "react";
import Image from "next/image";


type Props = {
  title: string;
  subTitle: string;
  hasSeparator?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const SectionSubTitle = ({title, subTitle, hasSeparator = false, ...others}: Props) => {
  return (
    <div {...others}>
      <div className='mx-auto text-center mb-16'>
        {
          hasSeparator &&
          <Image src={'/sub_separator.svg'} alt={'サブ区切り線'} width={286} height={27}
                 className='mx-auto my-8 lg:w-auto lg:h-auto w-[150px] h-[16px]'/>
        }
        <div>
          <h2 className='lg:text-2xl text-xl italic font-semibold'>{title}</h2>
          <div className='text-primary-600 lg:text-base text-sm'>{subTitle}</div>
        </div>
      </div>
    </div>
  );
}

export default SectionSubTitle;