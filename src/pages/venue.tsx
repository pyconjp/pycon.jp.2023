import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import Gmap from "@/components/elements/GoogleMap";

type SubTitle = {
  title: string;
}
type VenueInfo = {
  title: string;
  text: string;
}
type PageInfo = {
  text_4F: string;
  text_20F: string;
}
type SelectFloor = {
  floor: string;
}

const SubtitleComponent = ({ title }: SubTitle) => (
  <>
    <h4 className={"m-[12px] lg:text-3xl text-xl font-bold text-montserrat italic text-alt-black "}>{title}</h4>
  </>
);
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
const PCMapComponent = ({ text_4F, text_20F }: PageInfo) => (
  <>
    <div className={"flex flex-col items-center mb-[60px] lg:mx-[80px]"}>
      <SubtitleComponent title={text_4F} />
      <Image
        src={"/venue_map_4F.png"}
        alt={"map4F"}
        width={1200}
        height={1200}
        className={"flex-1 rounded-[10px]"}
      />
    </div>
    <div className={"flex flex-col items-center mb-[60px] lg:mx-[80px]"}>
      <SubtitleComponent title={text_20F} />
      <Image
        src={"/venue_map_20F.png"}
        alt={"map20F"}
        width={1200}
        height={1200}
        className={"flex-1 rounded-[10px]"}
      />
    </div>
  </>
);
const SPMapComponent = ({ text_4F, text_20F }: PageInfo) => {
  const [floor, setFloor] = useState(1);
  const FloorHandler = (floor: string) => {
    if (floor === text_4F) setFloor(1);
    if (floor === text_20F) setFloor(2);
  };

  const PaginationComponent = () => {
    const Current = ({ floor }: SelectFloor) => (
      <>
        <div className={'flex flex-col items-center p-[3px]'}>
          <h1 className={'text-2xl font-bold text-montserrat italic align-bottom text-alt-black'}>{floor}</h1>
        </div>
      </>
    );
    const Other = ({ floor }: SelectFloor) => (
      <>
        <div className={'flex flex-col items-center cursor-pointer p-[3px]'} onClick={() => FloorHandler(floor)}>
          <h1 className={'text-2xl font-bold text-montserrat italic align-bottom opacity-30 hover:text-alt-black hover:opacity-100'}>{floor}</h1>
        </div>
      </>
    );

    return (
      <>
        <div className={"mx-[20px] mt-[20px] mb-[10px]"}>
          <ul className={"flex flex-row justify-around"}>
            <li className={""}>
              {
                (floor === 1)
                &&
                <Current floor={text_4F} />
              }
              {
                (floor !== 1)
                &&
                <Other floor={text_4F} />
              }
            </li>
            <li className={""}>
              {
                (floor === 2)
                &&
                <Current floor={text_20F} />
              }
              {
                (floor !== 2)
                &&
                <Other floor={text_20F} />
              }
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={"mb-[60px] mx-[20px]"}>
        <PaginationComponent />
        {
          (floor === 1)
          &&
          <Image
            src={"/venue_map_4F.png"}
            alt={"map4F"}
            width={600}
            height={600}
            className={"mx-auto items-center rounded-[10px]"}
          />
        }
        {
          (floor === 2)
          &&
          <Image
            src={"/venue_map_20F.png"}
            alt={"map4F"}
            width={600}
            height={600}
            className={"mx-auto items-center rounded-[10px]"}
          />
        }
      </div>
    </>
  );
}

const VenuePage = () => {
  const { t } = useTranslation("VENUE");
  const [c, setContents] = useState({
    gmap_t_url: "",
    gmap_s_url: "",
    floor4: "",
    floor20: "",
    venue_title: "",
    venue_text_t: "",
    venue_text_s: "",
    location_title: "",
    location_text_t: "",
    location_text_s: "",
    station_title: "",
    station_text_t: "",
    station_text_s: "",
  });
  useEffect(() => {
    setContents({
      ...c,
      gmap_t_url: t("GMAP_T_URL"),
      gmap_s_url: t("GMAP_S_URL"),
      floor4: t("FLOOR4"),
      floor20: t("FLOOR20"),
      venue_title: t("VENUE_TITLE"),
      venue_text_t: t("VENUE_TEXT_T"),
      venue_text_s: t("VENUE_TEXT_S"),
      location_title: t("LOCATION_TITLE"),
      location_text_t: t("LOCATION_TEXT_T"),
      location_text_s: t("LOCATION_TEXT_S"),
      station_title: t("STATION_TITLE"),
      station_text_t: t("STATION_TEXT_T"),
      station_text_s: t("STATION_TEXT_S"),
    })
  }, [t]);

  return (
    <>
      <PageTitle title='Venue' />

      <SectionTitle title='Map' subTitle='会場レイアウト' />
      <div className={"lg:inline hidden"}>
        <PCMapComponent text_4F={c.floor4} text_20F={c.floor20} />
      </div>
      <div className={"lg:hidden inline"}>
        <SPMapComponent text_4F={c.floor4} text_20F={c.floor20} />
      </div>

      <SectionTitle title='Access' subTitle='会場アクセス' />
      <div className={"flex flex-col items-center justify-center lg:mx-[80px] mx-[20px] mb-[60px]"}>
        <h4 className="font-montserrat italic mr-[16px] lg:text-3xl text-2xl text-alt-black font-bold m-[12px]">Tutorial & Conference</h4>
        <div className={"flex lg:flex-row flex-col items-center justify-center gap-10 lg:mx-[80px] mx-[20px]"}>
          <div className={"m-[10px]"}>
            <Gmap
              url={c.gmap_t_url}
              width={"400"}
              height={"400"}
            />
          </div>
          <div className={"flex flex-col m-[20px]"}>
            <VenueInfoComponent title={c.venue_title} text={c.venue_text_t} />
            <VenueInfoComponent title={c.location_title} text={c.location_text_t} />
            <VenueInfoComponent title={c.station_title} text={c.station_text_t} />
          </div>
        </div>
      </div>
      <div className={"flex flex-col items-center justify-center lg:mx-[80px] mx-[20px] mb-[60px]"}>
        <h4 className="font-montserrat italic mr-[16px] lg:text-3xl text-2xl text-alt-black font-bold m-[12px]">Sprint</h4>
        <div className={"flex lg:flex-row flex-col items-center justify-center gap-10 lg:mx-[80px] mx-[20px]"}>
          <div className={"m-[10px]"}>
            <Gmap
              url={c.gmap_s_url}
              width={"400"}
              height={"400"}
            />
          </div>
          <div className={"flex flex-col m-[20px]"}>
            <VenueInfoComponent title={c.venue_title} text={c.venue_text_s} />
            <VenueInfoComponent title={c.location_title} text={c.location_text_s} />
            <VenueInfoComponent title={c.station_title} text={c.station_text_s} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VenuePage;