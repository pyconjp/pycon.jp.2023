import React from "react";

type Props = {
    children: React.ReactNode
  } & React.HTMLAttributes<HTMLDivElement>;

const NewsTitle = ({children}: Props) => {
  return (
      <div className='newsTitle'>  
        <div className=''>
          {children}
        </div>
      </div>
  )
}
export default  NewsTitle;  