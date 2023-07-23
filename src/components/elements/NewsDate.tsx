import React from "react";
import {ChevronRightIcon} from "@heroicons/react/20/solid";

type Props = {
    children: React.ReactNode
  } & React.HTMLAttributes<HTMLDivElement>;


const NewsDate = ({children}: Props) => {
  return (
      <div className='newsDate flex flex-row'>
        <ChevronRightIcon className='h-5 w-5 my-auto text-primary-500'/>
        <div className="text-lg text-secondary-600">
            {children}
        </div>
      </div>
  )
}

export default NewsDate;  