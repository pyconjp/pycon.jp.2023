import * as fs from "fs";
import { parse } from "csv-parse/sync";
import { Sponsor } from "@/types/sponsor";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SectionTitle from "@/components/elements/SectionTitle";
import SectionSubTitle from "@/components/elements/SectionSubTitle";


const SponsorCard = ({ name, logo, description, url }: Omit<Sponsor, "category">) => (
  <div className={"flex items-center gap-2 flex-col"}>
    <Image
      src={"/sponsor/" + logo}
      alt={name}
      width={150}
      height={150}
      className={"flex-1"}
    />
    <div className={"flex-1"}>
      <div>name: {name}</div>
      <div>url: {url}</div>
      <div>description: {description}</div>
    </div>
  </div>
);

const SponsorPage = ({ rows = [] }: { rows: Sponsor[] }) => {
  const { t } = useTranslation("PAGES")

  return (
    <>
      <SectionTitle title='SPONSOR' subTitle='スポンサー' />

      <SectionSubTitle title={'DIAMOND'} subTitle={'ダイヤモンド'} className='subTitle' />
      {rows.filter((row) => row.category === "diamond").map((row, index) => (
        <SponsorCard
          key={index}
          name={row.name}
          logo={row.logo}
          description={row.description}
          url={row.url}
        />
      ))}

      <SectionSubTitle title={'PLATINUM'} subTitle={'プラチナ'} className='subTitle' />
      {rows.filter((row) => row.category === "platinum").map((row, index) => (
        <SponsorCard
          key={index}
          name={row.name}
          logo={row.logo}
          description={row.description}
          url={row.url}
        />
      ))}

      <SectionSubTitle title={'GOLD'} subTitle={'ゴールド'} className='subTitle' />
      {rows.filter((row) => row.category === "gold").map((row, index) => (
        <SponsorCard
          key={index}
          name={row.name}
          logo={row.logo}
          description={row.description}
          url={row.url}
        />
      ))}

      <SectionSubTitle title={'SILVER'} subTitle={'シルバー'} className='subTitle' />
      {rows.filter((row) => row.category === "silver").map((row, index) => (
        <SponsorCard
          key={index}
          name={row.name}
          logo={row.logo}
          description={row.description}
          url={row.url}
        />
      ))}

      <SectionSubTitle title={'BRONZE'} subTitle={'ブロンズ'} className='subTitle' />
      {rows.filter((row) => row.category === "bronze").map((row, index) => (
        <SponsorCard
          key={index}
          name={row.name}
          logo={row.logo}
          description={row.description}
          url={row.url}
        />
      ))}

      <SectionSubTitle title={'SPECIAL'} subTitle={'スペシャル'} className='subTitle' />
      {rows.filter((row) => row.category === "special").map((row, index) => (
        <SponsorCard
          key={index}
          name={row.name}
          logo={row.logo}
          description={row.description}
          url={row.url}
        />
      ))}

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const buffer = fs.readFileSync("./src/data/sponsor.csv");
  const rows: Sponsor[] = parse(buffer, { delimiter: ",", columns: true });

  return {
    props: {
      rows,
    },
  };
};

export default SponsorPage;
