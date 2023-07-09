import * as fs from "fs";
import { parse } from "csv-parse/sync";
import { Sponsor } from "@/types/sponsor";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import Image from "next/image";


const DiamondSponsor = ({ category, name, logo, description, url }: Sponsor) => (
  <div className={"flex items-center gap-2 flex-col"}>
    <Image
      src={"/sponsor/"}
      alt={name}
      width={150}
      height={150}
      className={"flex-1"}
    />
    <div className={"flex-1"}>
      <div>name: {name}</div>
      <div>twitter: {twitter}</div>
      <div>github: {github}</div>
      <div>facebook: {facebook}</div>
    </div>
  </div>
);

const SponsorPage = () => {
  const { t } = useTranslation("PAGES")

  return (
    <>
      <h1 className='text-lg'>{t("SPONSOR")}</h1>
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
