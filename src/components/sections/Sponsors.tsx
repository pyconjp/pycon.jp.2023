// import useLocale from "@/components/hooks/locale";

import * as fs from "fs";
import { BecomeSponsorSection, } from "@/pages/sponsor";
import SectionTitle from "../elements/SectionTitle";
import { GetStaticProps } from "next";
import { Sponsor } from "@/types/sponsor";
import { parse } from "csv-parse/sync";

export default function SponsorsSection() {

  return (
    <>
      <SectionTitle title='SPONSOR' subTitle='スポンサー' />
      <BecomeSponsorSection />
    </>
  )
}

const getStaticProps: GetStaticProps = async () => {
  const buffer = fs.readFileSync("./src/data/sponsor.csv");
  const rows: Sponsor[] = parse(buffer, { delimiter: ",", columns: true });

  return {
    props: {
      rows,
    },
  };
};
