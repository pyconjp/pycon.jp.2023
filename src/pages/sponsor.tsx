import * as fs from "fs";
import * as path from 'path'
import { Sponsor } from "@/types/sponsor";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Image from "next/image";
import PageTitle from "@/components/elements/PageTitle";
import SectionSubTitle from "@/components/elements/SectionSubTitle";

export const DiamondComponent = ({ name, logo, url, description }: Omit<Sponsor, "category">) => (
  <div className={""}>
    <div className={"relative"}>
      <div className={"z-20 relative"}>
        <div className={"bg-[#ffffff] shadow-lg rounded-lg mt-[72px] p-[200px] relative"}>
          <Image
            src={"/sponsor/" + logo}
            alt=""
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
      <p className={"mx-[24px] mt-[19px] z-10 relative"}>{description}</p>
    </div>
    <Image
      src={"/Page_bg.svg"}
      alt={""}
      width={1426}
      height={468}
      className="block z-0 absolute bottom-[20px] left-1/2 -translate-x-1/2"
    />
  </div>
);


export const PlatitnumComponent = ({ name, logo, url, description }: Omit<Sponsor, "category">) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-[#ffffff] shadow-lg rounded-lg mt-[72px] px-[50%] py-[100px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt=""
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
    <p className={"mx-[24px] mt-[19px]"}>{description}</p>
  </div>
);

export const GoldComponent = ({ name, logo, url, description }: Omit<Sponsor, "category">) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-[#ffffff] shadow-lg rounded-lg mt-[72px] px-[50%] py-[50px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt=""
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
    <p className={"mt-[19px]"}>{description}</p>
  </div>
);

export const SilverComponent = ({ name, logo, url, description }: Omit<Sponsor, "category">) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-[#ffffff] shadow-lg rounded-lg mt-[36px] px-[50%] py-[50px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt=""
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

export const BronzeComponent = ({ name, logo, url, description }: Omit<Sponsor, "category">) => (
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

export const SpecialComponent = ({ name, logo, url, description }: Omit<Sponsor, "category">) => (
  <div className={"flex flex-col items-center"}>
    <div className={"bg-[#ffffff] shadow-lg rounded-lg mt-[72px] px-[50%] py-[50px] relative"}>
      <Image
        src={"/sponsor/" + logo}
        alt=""
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

export const PatronComponent = ({ name, logo, url, description }: Omit<Sponsor, "category">) => (
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

export const BecomeSponsorSection = () => {
  const { t } = useTranslation("SPONSOR")
  const [c, setContents] = useState({
    h1: "",
    p1: "",
    a1: "",
  });
  useEffect(() => {
    setContents({
      ...c,
      h1: t("H1"),
      p1: t("P1"),
      a1: t("A1"),
    })
  }, [t]);

  return <>
    <div className="lg:mx-[131px] mx-[16px] lg:my-[81px] my-[60px] py-[32px] bg-[#ffffff] shadow-lg rounded-lg">
      <div className="flex flex-col lg:mx-[72px] mx-4">
        <div className='before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-ml-8 before:-mt-2  before:content-[url("/ellipse.svg")] before:inline-block ml-0 pl-8'>
          <h3 className="lg:text-2xl text-xl text-alt-black font-bold inline">
            {c.h1}
          </h3>
        </div>
        <p className="text-alt-black text-lg p-[12px]">{c.p1}</p>
        <div className="ml-[auto]">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMgKYoLCU8Q7Vv9ppImGZ1-kcTaTlzkUXATtZuYSyeM7gwGQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row text-primary-500 underline hover:opacity-50">
            <p>{c.a1}</p>
            <Image
              src={"/linkout_p.svg"}
              alt={""}
              width={20}
              height={20}
              className="object-contain ml-[3px]"
            />
          </a>
        </div>
      </div>
    </div>
  </>
};

export const SponsorPage = ({ rows = [] }: { rows: Omit<Sponsor, "width" | "height">[] }) => {
  const { t } = useTranslation("SPONSOR")
  const [c, setContents] = useState({
    h1: "",
    p1: "",
    a1: "",
  });
  useEffect(() => {
    setContents({
      ...c,
      h1: t("H1"),
      p1: t("P1"),
      a1: t("A1"),
    })
  }, [t]);

  return (
    <>
      <PageTitle title='SPONSOR' />
      <div className={"text-center"}>
        <h2 className={"text-tertiary-900 font-montserrat italic text-[32px] drop-shadow-lg"}>Diamond</h2>
        <h2 className={"text-primary-600 text-[16px] drop-shadow-lg"}>ダイヤモンドスポンサー</h2>
      </div>
      <div className={"lg:mx-[245px] mx-[20px] mb-[32px]"}>
        {rows.map((row, index) => (
          (row.category === "diamond")
          && <DiamondComponent
            key={index}
            name={row.name}
            logo={row.logo}
            description={row.description}
            url={row.url}
          />
        ))}
      </div>

      <SectionSubTitle title={'Platinum'} subTitle={'プラチナスポンサー'} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-3 gap-3 lg:mx-[80px] mx-[47px]  mb-[32px]"}>
        {rows.map((row, index) => (
          (row.category === "platinum")
          && <PlatitnumComponent
            key={index}
            name={row.name}
            logo={row.logo}
            description={row.description}
            url={row.url}
          />
        ))}
      </div>

      <SectionSubTitle title={'Gold'} subTitle={'ゴールドスポンサー'} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-4 gap-5 lg:mx-[135px] mx-[102px] mb-[32px]"}>
        {rows.map((row, index) => (
          (row.category === "gold")
          && <GoldComponent
            key={index}
            name={row.name}
            logo={row.logo}
            description={row.description}
            url={row.url}
          />
        ))}
      </div>

      <SectionSubTitle title={'Silver'} subTitle={'シルバースポンサー'} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-5 gap-2 lg:mx-[135px] mb-[16px]"}>
        {rows.map((row, index) => (
          (row.category === "silver")
          && <SilverComponent
            key={index}
            name={row.name}
            logo={row.logo}
            description={row.description}
            url={row.url}
          />
        ))}
      </div>

      <SectionSubTitle title={'Bronze'} subTitle={'ブロンズスポンサー'} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-4 gap-3 lg:mx-[135px] mb-[32px]"}>
        {rows.map((row, index) => (
          (row.category === "bronze")
          && <BronzeComponent
            key={index}
            name={row.name}
            logo={row.logo}
            description={row.description}
            url={row.url}
          />
        ))}
      </div>

      <SectionSubTitle title={'Special'} subTitle={'特別スポンサー'} hasSeparator={true} className='subTitle' />
      <div className={"grid lg:grid-cols-4 gap-5 lg:mx-[135px] mx-[102px] mb-[32px]"}>
        {rows.map((row, index) => (
          (row.category === "special")
          && <SpecialComponent
            key={index}
            name={row.name}
            logo={row.logo}
            description={row.description}
            url={row.url}
          />
        ))}
      </div>

      <SectionSubTitle title={'Patron'} subTitle={'パトロン'} hasSeparator={true} className='subTitle' />
      <div className={"lg:mx-[128px] mb-[60px] grid lg:grid-cols-6  gap-4 justify-center mb-[32px]"}>
        {rows.map((row, index) => (
          (row.category === "patron")
          && <PatronComponent
            key={index}
            name={row.name}
            logo={row.logo}
            description={row.description}
            url={row.url}
          />
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // JSON ファイルを読み込む
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'sponsor.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const rows = JSON.parse(jsonText) as Sponsor[]

  // ページコンポーネントに渡す props オブジェクトを設定する
  return { props: { rows } }
}

export default SponsorPage;
