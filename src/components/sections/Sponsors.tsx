// import useLocale from "@/components/hooks/locale";

import * as fs from "fs";
import { BecomeSponsorSection, } from "@/pages/sponsor";
import SectionTitle from "../elements/SectionTitle";
import { GetStaticProps } from "next";
import { Sponsor } from "@/types/sponsor";
import { parse } from "csv-parse/sync";

export default function SponsorsSection() {

  return (
    <div className='lg:py-[60px] py-20'>
      <SectionTitle title='Sponsor' subTitle='スポンサー' />
      <BecomeSponsorSection />
    </div>
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
