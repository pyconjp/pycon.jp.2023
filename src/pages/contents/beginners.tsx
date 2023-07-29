import Markdown from "@/components/elements/Markdown";
import PageTitle from "@/components/elements/PageTitle";

const Beginners = () => {
  return (
    <>
      <PageTitle title="Contents for Beginners" />
      <div className="flex flex-col items-center self-stretch gap-8 px-4 py-5">
        <div className="flex flex-col items-center self-stretch py-9 px-0">
          <h1 className="text-3xl text-tertiary-900 italic tracking-[2.8px]">
            Contents Name
          </h1>
          <h2>コンテツ名</h2>
          <Markdown content={"## TITLE"} />
        </div>
      </div>
    </>
  );
};

export default Beginners;
