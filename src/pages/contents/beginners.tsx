import path from "path";
import fs from "fs";

import { POSTS_PATH } from "@/utils/mdUtils";
import Markdown from "@/components/elements/Markdown";
import PageTitle from "@/components/elements/PageTitle";

const Beginners = (props: { content: string }) => {
  return (
    <>
      <PageTitle title="Contents for Beginners" />
      <div className="flex flex-col items-center self-stretch gap-8 px-4 py-5 md:px-16 md:py-14">
        <div className="flex flex-col items-center self-stretch gap-8 py-9 px-0">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-4xl text-tertiary-900 italic tracking-[2.8px]">
              Contents Name
            </h1>
            <h2 className="text-xl text-primary-600 leading-5 tracking-[0.14px] bg-white ">
              コンテンツ名
            </h2>
          </div>
          <div className="flex flex-col gap-4 p-5 md:py-14 md:px-16 md:w-2/3 items-center shadow-lg rounded-lg">
            <Markdown content={props.content} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const beginnerFilePath = path.join(POSTS_PATH, "beginners.md");
  const content = fs.readFileSync(beginnerFilePath, "utf8");
  return {
    props: {
      content,
    },
  };
};

export default Beginners;
