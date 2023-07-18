import * as fs from "fs";
import { parse } from "csv-parse/sync";
import { Sponsor } from "@/types/sponsor";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SectionTitle from "@/components/elements/SectionTitle";
import SectionSubTitle from "@/components/elements/SectionSubTitle";
import ExternalLink from "@/components/elements/ExternalLink";
import Link from "next/link";


const SponsorCard = ({ name, logo, url, description, width, height }: Omit<Sponsor, "category">) => (
  <div className={"flex items-center gap-2 flex-col"}>
    <Image
      src={"/sponsor/" + logo}
      alt={name}
      width={width}
      height={height}
      className={"flex-1"}
    />
    <div className={"flex-1"}>
      <div>
        <ExternalLink text={name} url={url} />
      </div>
    </div>
    <div>
      {description}
    </div>
  </div>
);

const SilverSponsorCard = ({ name, logo, url, description, width, height }: Omit<Sponsor, "category">) => (
  <div className={"flex items-center gap-2 flex-col"}>
    <div className={"flex-1"}>
      <div>
        <ExternalLink text={name} url={url} />
      </div>
    </div>
    <div>
      {description}
    </div>
  </div>
);

const SponsorPage = ({ rows = [] }: { rows: Omit<Sponsor, "width" | "height">[] }) => {
  const { t } = useTranslation("PAGES")
  const DiamondSection =
    <>
      <SectionSubTitle title={'DIAMOND'} subTitle={'ダイヤモンド'} className='subTitle' />
      {
        rows.filter((row) => row.category === "diamond").map((row, index) => (
          <>
            <div className={"flex items-center flex-col mx-44"}>
              <div className={"m-28"}>
                <Image
                  src={"/sponsor/" + row.logo}
                  alt={row.name}
                  width={600}
                  height={600}
                  className={"flex-1"}
                />
              </div>
              <div className={"flex-1 my-8"}>
                <div>
                  <ExternalLink text={row.name} url={row.url} />
                </div>
              </div>
              <div>
                {row.description}
              </div>
            </div >
          </>
        ))
      }
    </>


  const PlatitnumSection =
    <>
      <SectionSubTitle title={'PLATINUM'} subTitle={'プラチナ'} className='subTitle' />
      <div className={"grid lg:grid-cols-3 grid-cols-2 gap-4 mx-44"}>
        {
          rows.filter((row) => row.category === "platinum").map((row, index) => (
            <SponsorCard
              key={index}
              name={row.name}
              logo={row.logo}
              description={row.description}
              url={row.url}
              width={300}
              height={300}
            />
          ))
        }
      </div>
    </>

  const GoldSection =
    <>
      <SectionSubTitle title={'GOLD'} subTitle={'ゴールド'} className='subTitle' />
      <div className={"grid lg:grid-cols-4 grid-cols-4 gap-4 mx-44"}>
        {
          rows.filter((row) => row.category === "gold").map((row, index) => (
            <SponsorCard
              key={index}
              name={row.name}
              logo={row.logo}
              description={row.description}
              url={row.url}
              width={150}
              height={150}
            />
          ))
        }
      </div>
    </>

  const SilverSection =
    <>
      <SectionSubTitle title={'SILVER'} subTitle={'シルバー'} className='subTitle' />
      <div className={"grid lg:grid-cols-4 grid-cols-4 gap-4 mx-44"}>
        {
          rows.filter((row) => row.category === "silver").map((row, index) => (
            <SilverSponsorCard
              key={index}
              name={row.name}
              logo={row.logo}
              description={row.description}
              url={row.url}
              width={150}
              height={150}
            />
          ))
        }
      </div>
    </>

  const BronzeSection =
    <>
      <SectionSubTitle title={'BRONZE'} subTitle={'ブロンズ'} className='subTitle' />
      <div className={"grid lg:grid-cols-4 grid-cols-4 gap-4 mx-44"}>
        {
          rows.filter((row) => row.category === "bronze").map((row, index) => (
            <SilverSponsorCard
              key={index}
              name={row.name}
              logo={row.logo}
              description={row.description}
              url={row.url}
              width={150}
              height={150}
            />
          ))
        }
      </div>
    </>

  const SpecialSection =
    <>
      <SectionSubTitle title={'SPECIAL'} subTitle={'スペシャル'} className='subTitle' />
      <div className={"grid lg:grid-cols-4 grid-cols-4 gap-4 mx-44"}>
        {
          rows.filter((row) => row.category === "special").map((row, index) => (
            <SponsorCard
              key={index}
              name={row.name}
              logo={row.logo}
              description={row.description}
              url={row.url}
              width={150}
              height={150}
            />
          ))
        }
      </div>
    </>

  const PatronSection =
    <>
      <SectionSubTitle title={'PATRON'} subTitle={'パトロン'} className='subTitle' />
      <div className={"grid lg:grid-cols-4 grid-cols-4 gap-4 mx-44"}>
        {
          rows.filter((row) => row.category === "patron").map((row, index) => (
            <SponsorCard
              key={index}
              name={row.name}
              logo={row.logo}
              description={row.description}
              url={row.url}
              width={50}
              height={50}
            />
          ))
        }
      </div>
    </>

  return (
    <>
      <SectionTitle title='SPONSOR' subTitle='スポンサー' />
      <>
        <div className={"my-16"}>
          {DiamondSection}
        </div>
      </>
      <>
        <div className={"my-16"}>
          {PlatitnumSection}
        </div>
      </>

      <>
        <div className={"my-16"}>
          {GoldSection}
        </div>
      </>
      <>
        <div className={"my-16"}>
          {SilverSection}
        </div>
      </>
      <>
        <div className={"my-16"}>
          {BronzeSection}
        </div>
      </>

      <>
        <div className={"my-16"}>
          {SpecialSection}
        </div>
      </>
      <>
        <div className={"my-16"}>
          {PatronSection}
        </div>
      </>
      <div className="flex-row items-center px-[5%] sm:px-[10%] xl:px-[20%] my-[36px]">
        <div className='heading'>
          <div
            className='before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-ml-8 before:-mt-2  before:content-[url("/ellipse.svg")] before:inline-block ml-0 pl-8'>
            <h6 className='text-2xl font-montserrat italic inline'>
              スポンサー募集中！
            </h6>
          </div>
        </div>
        <div>
          現在PyCon JP 2022は、スポンサーを募集中です。Pythonをキーワードに集まる多くの参加者に、Pythonを扱う企業であることや、エンジニアコミュニティを理解し支援する風土のある企業であること、または自社のサービスをアピールすることが可能です。詳細は募集要項をご覧ください。
        </div>
        <div className="pr-8 text-lg font-bold text-right underline lg:text-right text-primary-700 pb-14">
          <Link href="https://forms.gle/vHW5TSeZFWY3rgKW9/" target="_blank">
            スポンサー募集概要・応募フォーム
          </Link>
        </div>
      </div>    </>
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
