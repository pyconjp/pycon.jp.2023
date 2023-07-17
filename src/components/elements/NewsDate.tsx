import React from "react";

type Props = {
    children: React.ReactNode
  } & React.HTMLAttributes<HTMLDivElement>;


const NewsDate = ({children}: Props) => {
  return (
      <div className='newsDate'>  
        <div className="before:top before:w-2 before:h-2.5 before:mr-2 before:mt-4 before:inline-block before:content-[''] before:bg-center before:bg-no-repeat before:bg-contain before:bg-[url('/ellipse.svg')] text-sm ">
            {children}
        </div>
      </div>
  )
}

export default NewsDate;  