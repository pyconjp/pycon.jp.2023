import Image from "next/image";
import React from "react";

type Props = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

const PageTitle = ({title, ...others}: Props) => {
  return (
    <div {...others}>
      <div className='mx-auto text-center mb-16 flex flex-row items-end justify-center'>
        <Image 
          src={'/Page_heade_pc_left.svg'} 
          alt={'ヘッダー左'} 
          width={193} 
          height={145} 
          className='lg:mr-[40px] lg:ml-[20px] mr-[10px] ml-[16px] mt-8 lg:w-[193px] lg:h-[145px] w-[110px] h-[83px]'/>
        <div>
          <h1 className='lg:text-5xl text-[48px] font-montserrat italic align-bottom'>{title}</h1>
        </div>
        <Image
          src={'/Page_heade_pc_right.svg'} 
          alt={'ヘッダー右'} 
          width={196} 
          height={18} 
          className='lg:mr-[20px] lg:ml-[40px] mr-[16px] ml-[10px] mt-8 lg:w-[196px] lg:h-[18px] w-[111px] h-[10px]'/>
      </div>
    </div>
  );
}

export default PageTitle;