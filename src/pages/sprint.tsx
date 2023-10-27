import {fetchOrderPositions, getSprints} from "@/utils/pretix";
import {SprintTopic} from "@/types/sprint";
import {GetStaticProps} from "next";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import PageTitle from "@/components/elements/PageTitle";
import PageHead from "@/components/elements/PageHead";

export const PosterPage = ({sprints}: {sprints: SprintTopic[]}) => {
  const { t } = useTranslation("MENU");
  return (
    <>
      <PageHead/>
      <PageTitle title={t("EVENTS.SPRINT")}/>
      <SprintCard sprints={sprints}/>
    </>
  )
}

const SprintCard = ({sprints}: {sprints: SprintTopic[]}) => {
    const { t } = useTranslation("HERO");

    return (
        <div className={"lg:mx-[120px] mx-[80px] my-[60px]"}>
            <div className={"flex flex-row justify-between cursor-pointer transition duration-300 hover:opacity-60"}>
                <div className={"flex flex-col grow text-left grow"}>
                    <div className={"flex flex-row items-center"}>
                        <Image
                            src={"/location_b.svg"}
                            alt={""}
                            width={25}
                            height={25}
                            className={"object-contain mr-[6px] w-[20px] h-[20px] min-w-[20px]"}
                        />
                        <h5 className={"font-montserrat italic text-alt-black font-bold lg:text-lg text-base my-[6px]"}>{}</h5>
                    </div>
                    <h4 className={"text-alt-black font-bold lg:text-2xl text-lg my-[10px]"}>{t("VENUE_SPRINT")}</h4>
                    <h5 className={"text-alt-black lg:text-lg text-sm my-[6px] whitespace-pre-wrap"}>{t("SPRINT_DATE")}</h5>
                </div>
                <div className="flex items-center">
                    <Image
                        src={"/arrow_down.svg"}
                        alt={""}
                        width={25}
                        height={25}
                        className={"object-contain w-[20px] h-[20px] min-w-[20px] rotate-180"}
                    />
                </div>
            </div>
            <div className={"my-[20px] bg-secondary-100 rounded p-[15px]"}>
                { sprints.map((topic,index) => (<p key={index} className={"lg:text-base text-sm whitespace-pre-wrap"}>{topic.topic}</p>)) }
            </div>
            <div className="flex justify-center mb-[100px]">
                <Image
                    src={"/sub_separator.svg"}
                    alt={""}
                    width={286}
                    height={27}
                    className={"object-contain w-[150px] h-[16px]"}
                />
            </div>
        </div>
    )
};

export const getStaticProps: GetStaticProps = async () => {
  const orderPositions = await fetchOrderPositions();
  const sprints = getSprints(orderPositions);
  console.log(sprints);

  return {
    props: {
      sprints
    }
  }
}

export default PosterPage;
