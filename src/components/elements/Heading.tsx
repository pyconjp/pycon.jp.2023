import React from "react";

type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

const Heading = ({children}: Props) => {
  return (
    <div className='heading'>
      <div
        className='relative before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-ml-8 before:-mt-2  before:content-[url("/ellipse.svg")] before:inline-block before:absolute ml-0 pl-8'>
        <h4 className='text-4xl font-montserrat italic inline'>
          {children}
        </h4>
      </div>
    </div>
  );
}

export default Heading;