import {fetchOrderPositions, getSprints} from "@/utils/pretix";
import {SprintTopic} from "@/types/sprint";
import {GetStaticProps} from "next";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import PageTitle from "@/components/elements/PageTitle";
import PageHead from "@/components/elements/PageHead";

export const PosterPage = ({sprints}: { sprints: SprintTopic[] }) => {
  const {t} = useTranslation("MENU");
  return (
    <>
      <PageHead/>
      <PageTitle title='Sprint'/>
      <SprintCard sprints={sprints}/>
    </>
  )
}

const SprintCard = ({sprints}: { sprints: SprintTopic[] }) => {
  const {t} = useTranslation("HERO");

  return (
    <div className={"lg:mx-[120px] mx-[80px] my-[60px]"}>
      <div className={"flex flex-row justify-between duration-300"}>
        <div className={"flex flex-col grow text-left grow"}>
          <div className={"flex flex-row items-center"}>
            <Image
              src={"/location_b.svg"}
              alt={""}
              width={25}
              height={25}
              className={"object-contain mr-[6px] w-[20px] h-[20px] min-w-[20px]"}
            />
            <h4 className={"text-alt-black font-bold lg:text-2xl text-lg my-[10px]"}>{t("VENUE_SPRINT")}</h4>
          </div>
          <h5 className={"text-alt-black lg:text-lg text-sm my-[6px] whitespace-pre-wrap"}>{t("SPRINT_DATE")}</h5>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {sprints.map((topic, index) => (
          <div key={index} className={"bg-secondary-100 rounded p-4"}>
            <div className={'whitespace-pre-wrap lg:text-base text-sm'}>
              {topic.subject}
            </div>
            <div className='font-bold mt-2'>
              {topic.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const orderPositions = await fetchOrderPositions();
  const sprints = getSprints(orderPositions);

  return {
    props: {
      sprints
    }
  }
}

export default PosterPage;
