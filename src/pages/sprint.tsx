import {fetchOrderPositions, getSprints} from "@/utils/pretix";
import {SprintTopic} from "@/types/sprint";
import {GetStaticProps} from "next";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import PageTitle from "@/components/elements/PageTitle";
import PageHead from "@/components/elements/PageHead";
import Gmap from "@/components/elements/GoogleMap";

type VenueInfo = {
  title: string;
  text: string;
}

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
    <div className={"lg:mx-[120px] mx-auto my-[60px]"}>
      <div className={"flex flex-row justify-between duration-300 mb-6"}>
        <div className={"flex flex-col grow text-left grow"}>
          <div className={"flex flex-row items-center mx-auto"}>
            <Image
              src={"/location_b.svg"}
              alt={""}
              width={25}
              height={25}
              className={"object-contain mr-[6px] w-[20px] h-[20px] min-w-[20px]"}
            />
            <h4 className={"text-alt-black font-bold lg:text-2xl text-lg my-[10px]"}>{t("VENUE_SPRINT")}</h4>
          </div>
          <h5 className={"text-alt-black lg:text-lg text-sm my-1.5 whitespace-pre-wrap mx-auto"}>{t("SPRINT_DATE")}</h5>
          <div className={"flex lg:flex-row flex-col items-center justify-center gap-10 lg:mx-[80px] mx-[20px]"}>
            <div className={"m-[10px]"}>
              <Gmap
                url={t('GMAP_S_URL', {ns: 'VENUE'})}
                width={"400"}
                height={"400"}
              />
            </div>
            <div className={"flex flex-col m-auto"}>
              <VenueInfoComponent title={t('VENUE_TITLE', {ns: 'VENUE'})} text={t('VENUE_TEXT_S', {ns: 'VENUE'})} />
              <VenueInfoComponent title={t('LOCATION_TITLE', {ns: 'VENUE'})} text={t('LOCATION_TEXT_S', {ns: 'VENUE'})} />
              <VenueInfoComponent title={t('STATION_TITLE', {ns: 'VENUE'})} text={t('STATION_TEXT_S', {ns: 'VENUE'})} />
            </div>
          </div>
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

const VenueInfoComponent = ({ title, text }: VenueInfo) => (
  <>
    <div className={"flax flex-col mb-[40px]"}>
      <div className='before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-ml-8 before:-mt-2  before:content-[url("/ellipse.svg")] before:inline-block ml-0 pl-8'>
        <h4 className="lg:text-2xl text-xl text-alt-black font-bold inline">
          {title}
        </h4>
      </div>
      <p className={"m-[10px] whitespace-pre-wrap"}>{text}</p>
    </div>
  </>
);

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
