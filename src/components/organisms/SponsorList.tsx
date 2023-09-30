import { Sponsor } from "@/types/sponsor";
import SectionSubTitle from "../elements/SectionSubTitle";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function SponsorList({ rows = [] }: {
  rows: Sponsor[]
}) {
  const { i18n } = useTranslation();
  const { t } = useTranslation("SPONSOR")
  const [c, setContents] = useState({
    diamond: "",
    platinum: "",
    gold: "",
    silver: "",
    bronze: "",
    special: "",
    patron: "",
  });
  useEffect(() => {
    setContents({
      diamond: t("DIAMOND"),
      platinum: t("PLATINUM"),
      gold: t("GOLD"),
      silver: t("SILVER"),
      bronze: t("BRONZE"),
      special: t("SPECIAL"),
      patron: t("PATRON"),
    })
  }, [t]);

  return (
    <div>
      <div className={"text-center"}>
        <h2 className={"text-tertiary-900 font-montserrat italic text-[32px] drop-shadow-lg"}>Diamond</h2>
        <h2 className={"text-primary-600 text-[16px] drop-shadow-lg"}>{t(c.diamond)}</h2>
      </div>
      <div className={"lg:mx-[245px] mx-[20px] mb-[32px]"}>
        {
          filterByCategory(rows, "Diamond").map(
            (row, index) =>
              <DiamondComponent key={index}{...row}{...getTranslation(row, i18n.language)} />
          )
        }
      </div>

      <SectionSubTitle title={'Platinum'} subTitle={t(c.platinum)} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-3 gap-3 lg:mx-[80px] mx-[47px]  mb-[32px]"}>
        {
          filterByCategory(rows, "Platinum").map(
            (row, index) =>
              <PlatitnumComponent key={index}{...row}{...getTranslation(row, i18n.language)} />
          )
        }
      </div>

      <SectionSubTitle title={'Gold'} subTitle={t(c.gold)} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-4 gap-5 lg:mx-[135px] mx-[102px] mb-[32px]"}>
        {
          filterByCategory(rows, "Gold").map(
            (row, index) =>
              <GoldComponent key={index}{...row}{...getTranslation(row, i18n.language)} />
          )
        }
      </div>

      <SectionSubTitle title={'Silver'} subTitle={t(c.silver)} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-5 gap-2 lg:mx-[135px] mx-[102px] mb-[16px]"}>
        {
          filterByCategory(rows, "Silver").map(
            (row, index) =>
              <SilverComponent key={index}{...row}{...getTranslation(row, i18n.language)} />
          )
        }
      </div>

      <SectionSubTitle title={'Bronze'} subTitle={t(c.bronze)} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-4 gap-3 lg:mx-[135px] mb-[32px]"}>
        {
          filterByCategory(rows, "Bronze").map(
            (row, index) =>
              <BronzeComponent key={index}{...row}{...getTranslation(row, i18n.language)} />
          )
        }
      </div>

      <SectionSubTitle title={'Special'} subTitle={t(c.special)} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-4 gap-5 lg:mx-[135px] mx-[102px] mb-[32px]"}>
        {
          filterByCategory(rows, "special").map(
            (row, index) =>
              <SpecialComponent key={index}{...row}{...getTranslation(row, i18n.language)} />
          )
        }
      </div>

      <SectionSubTitle title={'Patron'} subTitle={t(c.patron)} hasSeparator={true} className='subTitle' />
      <div className={"lg:mx-[128px] grid lg:grid-cols-6  gap-4 justify-center mb-[32px]"}>
        {
          filterByCategory(rows, "patron").map(
            (row, index) =>
              <PatronComponent key={index}{...row}{...getTranslation(row, i18n.language)} />
          )
        }
      </div>

      <BecomeSponsorSection />
    </div>
  )
}

const filterByCategory = (sponsors: Sponsor[], category: Sponsor["category"]) => sponsors.filter(sponsor => sponsor.category === category);


const DiamondComponent = ({ name, logo, url, description }: Sponsor) => (
  <div className={""}>
    <div className={"relative"}>
      <div className={"z-20 relative"}>
        <div className={"bg-white shadow-lg rounded-lg mt-[72px] lg:p-[200px] p-[100px] relative"}>
          <Image
            src={"/sponsor/" + logo}
            alt={name}
            fill
            className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
          />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row text-secondary-600 underline justify-center mt-[16px] mx-[16px] hover:opacity-50">
          <p>{name}</p>
          <Image
            src={"/linkout_b.svg"}
            alt={""}
            width={20}
            height={20}
            className="object-contain ml-[3px]"
          />
        </a>
      </div>
      <p className={"mx-[24px] mt-[19px] z-10 relative whitespace-pre-wrap"}>{description}</p>
    </div>
    {/*<Image*/}
    {/*  src={"/Page_bg.svg"}*/}
    {/*  alt={""}*/}
    {/*  width={1426}*/}
    {/*  height={468}*/}
    {/*  className="block z-0 absolute bottom-[20px] left-1/2 -translate-x-1/2"*/}
    {/*/>*/}
  </div>
);


const PlatitnumComponent = ({ name, logo, url, description }: Sponsor) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-white shadow-lg rounded-lg mt-[72px] px-[50%] py-[100px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt={name}
        fill
        className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
      />
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row text-secondary-600 underline justify-center mt-[16px] mx-[16px] hover:opacity-50">
      <p>{name}</p>
      <Image
        src={"/linkout_b.svg"}
        alt={""}
        width={20}
        height={20}
        className="object-contain ml-[3px]"
      />
    </a>
    <p className={"mx-[24px] mt-[19px] whitespace-pre-wrap"}>{description}</p>
  </div>
);

const GoldComponent = ({ name, logo, url, description }: Sponsor) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-white shadow-lg rounded-lg mt-[72px] px-[50%] py-[50px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt={name}
        fill
        className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
      />
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row text-secondary-600 underline justify-center mt-[16px] hover:opacity-50">
      <p>{name}</p>
      <Image
        src={"/linkout_b.svg"}
        alt={""}
        width={20}
        height={20}
        className="object-contain ml-[3px]"
      />
    </a>
    <p className={"mt-[19px] whitespace-pre-wrap"}>{description}</p>
  </div>
);

const SilverComponent = ({ name, logo, url }: Sponsor) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-white shadow-lg rounded-lg mt-[36px] px-[50%] py-[50px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt={name}
        fill
        className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
      />
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row text-secondary-600 underline justify-center mt-[8px] hover:opacity-50">
      <p>{name}</p>
      <Image
        src={"/linkout_b.svg"}
        alt={""}
        width={20}
        height={20}
        className="object-contain ml-[3px]"
      />
    </a>
  </div>
);

const BronzeComponent = ({ name, url }: Sponsor) => (
  <div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row text-secondary-600 underline justify-center mt-[16px] hover:opacity-50">
      <p>{name}</p>
      <Image
        src={"/linkout_b.svg"}
        alt={""}
        width={20}
        height={20}
        className="object-contain ml-[3px]"
      />
    </a>
  </div>
);

const SpecialComponent = ({ name, logo, url }: Sponsor) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-white shadow-lg rounded-lg mt-[72px] px-[50%] py-[50px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt={name}
        fill
        className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
      />
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row text-secondary-600 underline justify-center mt-[16px] hover:opacity-50">
      <p>{name}</p>
      <Image
        src={"/linkout_b.svg"}
        alt={""}
        width={20}
        height={20}
        className="object-contain ml-[3px]"
      />
    </a>
  </div>
);

const PatronComponent = ({ name, logo }: Sponsor) => (
  <div className={"flex items-center gap-2 flex-row"}>
    <Image
      src={"/sponsor/" + logo}
      alt={name}
      width={20}
      height={20}
      className={"flex-1 rounded-[10px] max-w-[60px] min-w-[60px]"}
    />
    <div className={"mb-[6px] font-bold"}>{name}</div>
  </div>
);

const BecomeSponsorSection = () => {
  const { t } = useTranslation("SPONSOR")
  const [c, setContents] = useState({
    h1: "",
    p1: "",
    a1: "",
  });
  useEffect(() => {
    setContents({
      h1: t("H1"),
      p1: t("P1"),
      a1: t("A1"),
    })
  }, [t]);

  return <>
    <div className="lg:mx-[131px] mx-[16px] lg:my-[81px] my-[60px] py-[32px] bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:mx-[72px] mx-4">
        <div
          className='before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-ml-8 before:-mt-2  before:content-[url("/ellipse.svg")] before:inline-block ml-0 pl-8'>
          <h3 className="lg:text-2xl text-xl text-alt-black font-bold inline">
            {c.h1}
          </h3>
        </div>
        <p className="text-alt-black text-lg p-[12px]">{c.p1}</p>
        <div className="ml-[auto]">
        </div>
      </div>
    </div>
  </>
};

const getTranslation = (sponsor: Sponsor, language: string): { name: string, description: string } => {
  if (language.startsWith("en")) {
    return {
      name: sponsor.name_en || sponsor.name,
      description: sponsor.description_en || sponsor.description,
    };
  } else if (language.startsWith("ja")) {
    return {
      name: sponsor.name,
      description: sponsor.description,
    };
  }

  return { name: '', description: '' };
}