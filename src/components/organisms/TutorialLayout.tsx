import React from "react";
import {Talk} from "@/types/timetable";
import TutorialMenu from "@/components/elements/TutorialMenu";

type Props = {
  children: React.ReactNode;
  tutorials: Talk[];
}


const TutorialLayout = ({children, tutorials}: Props) => {
  return (
    <div className='flex flex-col-reverse items-start lg:flex-row gap-6 w-10/12 mx-auto'>
      <TutorialMenu tutorials={tutorials}/>
      <div className='flex-1 w-full'>
        {children}
      </div>
    </div>
  )
}

export default TutorialLayout;