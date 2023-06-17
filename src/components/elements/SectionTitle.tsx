import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  subTitle: string;
} & React.HTMLAttributes<HTMLDivElement>;

const SectionTitle = ({title, subTitle, ...others}: Props) => {
  return (
    <div {...others}>
      <div className='mx-auto text-center mb-16'>
        <div>
          <h1 className='lg:text-5xl text-[32px] italic font-semibold'>{title}</h1>
          <div className='text-primary-600 lg:text-xl text-lg'>{subTitle}</div>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;