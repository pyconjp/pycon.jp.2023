import React from "react";

type Props = {
    children: React.ReactNode
  } & React.HTMLAttributes<HTMLDivElement>;

const NewsTitle = ({children}: Props) => {
  return (
      <div className='newsTitle'>  
        <div className='lg:text-lg text-base text-tertiary-900 ml-5 lg:ml-auto'>
          {children}
        </div>
      </div>
  )
}
export default  NewsTitle;  