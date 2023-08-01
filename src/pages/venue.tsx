import { GetStaticProps } from "next";
import Image from "next/image";
import { Staff } from "@/types/staff";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import Gmap from "@/components/elements/GoogleMap";
import { convertToObject, isConstructorDeclaration } from "typescript";

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

const SubtitleComponent = ({title}:SubTitle) => (
  <>
    <h4 className={"m-[12px] lg:text-3xl text-xl font-bold text-montserrat italic text-alt-black "}>{title}</h4>
    <Image 
      src={"/sub_separator.svg"}
      alt={"サブ区切り線"} 
      width={286} 
      height={27}
      className={"mx-auto mb-8 lg:w-auto lg:h-auto w-[150px] h-[16px]"}
    />
  </>
);
const VenueInfoComponent = ({title, text}:VenueInfo) => (
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
const PCMapComponent = ({text_4F, text_20F}:PageInfo) => (
    <>
      <div className={"flex flex-col items-center mb-[60px] lg:mx-[80px]"}>
        <SubtitleComponent title={text_4F} />
        <Image
          src={"/venue_map_4F.png"}
          alt={"map4F"}
          width={600}
          height={600}
          className={"flex-1 rounded-[10px]"}
        />
      </div>
      <div className={"flex flex-col items-center mb-[60px] lg:mx-[80px]"}>
        <SubtitleComponent title={text_20F} />
        <Image
          src={"/venue_map_20F.png"}
          alt={"map20F"}
          width={600}
          height={600}
          className={"flex-1 rounded-[10px]"}
        />
      </div>
    </>
  );
const SPMapComponent = ({text_4F, text_20F}:PageInfo) => {
  const [floor, setFloor] = useState(1);
  const FloorHandler = (floor:string) => {
    if(floor === text_4F) setFloor(1);
    if(floor === text_20F) setFloor(2);
  };
  
  const PaginationComponent = () => {
    const Current = ({floor}:SelectFloor) => (
      <>
        <div className={'flex flex-col items-center p-[3px]'}>
          <h1 className={'text-2xl font-bold text-montserrat italic align-bottom text-alt-black'}>{floor}</h1>
          <Image
            src={'/Page_heade_pc_right.svg'} 
            alt={'ヘッダー右'} 
            width={196} 
            height={18} 
            className={'w-[150px] h-[20px]'}
          />
        </div>
      </>
    );
    const Other = ({floor}:SelectFloor) => (
        <>
          <div className={'flex flex-col items-center cursor-pointer p-[3px]'} onClick={()=>FloorHandler(floor)}>
            <h1 className={'p-[10px] text-2xl font-bold text-montserrat italic align-bottom opacity-50 hover:text-alt-black hover:opacity-100'}>{floor}</h1>
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
                  <Current floor={text_4F}/>
              }
              {
                (floor !== 1)
                  &&
                  <Other floor={text_4F}/>
              }
            </li>
            <li className={""}>
              {
                (floor === 2)
                  &&
                  <Current floor={text_20F}/>
              }
              {
                (floor !== 2)
                  &&
                  <Other floor={text_20F}/>
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
      <PaginationComponent/>
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
    gmap_url: "",
    floor4: "",
    floor20: "",
    venue_title: "",
    venue_text: "",
    location_title: "",
    location_text: "",
    station_title: "",
    station_text: "",
  });
  useEffect(() => {
    setContents({...c,
      gmap_url: t("GMAP_URL"),
      floor4: t("FLOOR4"),
      floor20: t("FLOOR20"),
      venue_title: t("VENUE_TITLE"),
      venue_text: t("VENUE_TEXT"),
      location_title: t("LOCATION_TITLE"),
      location_text: t("LOCATION_TEXT"),
      station_title: t("STATION_TITLE"),
      station_text: t("STATION_TEXT"),
    })
  },[t]);

  return (
    <>
      <PageTitle title='Venue' />

      <SectionTitle title='Map' subTitle='会場レイアウト'/>
      <div className={"lg:inline hidden"}>
        <PCMapComponent text_4F={c.floor4} text_20F={c.floor20}/>
      </div>
      <div className={"lg:hidden inline"}>
        <SPMapComponent text_4F={c.floor4} text_20F={c.floor20}/>
      </div>

      <SectionTitle title='Access' subTitle='会場アクセス'/>
      <div className={"flex lg:flex-row flex-col items-center justify-center gap-10 lg:mx-[80px] mx-[20px]"}>
        <div className={"m-[10px]"}>
          <Gmap
            url={c.gmap_url}
            width={"500"}
            height={"400"}
          />
        </div>
        <div className={"flex flex-col m-[20px]"}>
          <VenueInfoComponent title={c.venue_title} text={c.venue_text}/>
          <VenueInfoComponent title={c.location_title} text={c.location_text}/>
          <VenueInfoComponent title={c.station_title} text={c.station_text}/>
        </div>
      </div>
      
    </>
  );
};

export default VenuePage;