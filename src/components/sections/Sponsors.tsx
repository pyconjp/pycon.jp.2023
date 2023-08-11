// import useLocale from "@/components/hooks/locale";

import { BecomeSponsorSection, BronzeComponent, DiamondComponent, GoldComponent, PatronComponent, PlatitnumComponent, SilverComponent, SpecialComponent, } from "@/pages/sponsor";
import SectionTitle from "../elements/SectionTitle";
import { Sponsor } from "@/types/sponsor";
import SectionSubTitle from "../elements/SectionSubTitle";

export default function SponsorsSection({ rows = [] }: { rows: Omit<Sponsor, "width" | "height">[] }) {

  return (
    <div className='lg:py-[60px] py-20'>
      <SectionTitle title='SPONSOR' subTitle='スポンサー' />
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
        {rows.map((row, index) => {
          return (
            (row.category === "platinum")
            && <PlatitnumComponent
              key={index}
              name={row.name}
              logo={row.logo}
              description={row.description}
              url={row.url} />
          );
        })}
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
      <BecomeSponsorSection />
    </div>
  )
}
