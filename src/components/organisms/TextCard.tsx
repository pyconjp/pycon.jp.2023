import Image from "next/image";
import React from "react";
import styles from '@/styles/text_card.module.scss';

type Props = {
  children: React.ReactNode;
  image: Parameters<typeof Image>[0] & { alt: string };
} & React.HTMLAttributes<HTMLDivElement>;

const TextCard = ({children, image, ...others}: Props) => {
  return (
    <div {...others}>
      <div className='flex gap-6 flex-col lg:flex-row lg:items-start mt-16 items-center'>
        <Image {...image} alt={image.alt} className='lg:max-w-[60%] lg:min-w-[40%]'/>
        <div className={'flex flex-col gap-6 ' + styles.textCardText}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextCard;