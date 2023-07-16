import React from "react";

type Props = {
    children: React.ReactNode
  } & React.HTMLAttributes<HTMLDivElement>;


const NewsDate = ({children}: Props) => {
  return (
      <div className='newsDate'>  
        <div className='before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-mt-2  before:inline-block'>
        {children}
        </div>
      </div>
  )
}

export default NewsDate;  