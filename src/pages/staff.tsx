import * as fs from "fs";
import { parse } from "csv-parse/sync";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Staff } from "@/types/staff";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import TextCard from "@/components/organisms/TextCard";

const StaffCard = ({ name, icon, twitter, github, facebook }: Staff) => (
  <div className={"flex items-center gap-2 flex-row"}>
    <Image
      src={"/staff/" + icon}
      alt={name}
      width={10}
      height={10}
      className={"flex-1 rounded-[10px] max-w-[60px] min-w-[60px]"}
    />
    <div className={"flex-1"}>
      <div className={"m-[12px] font-bold"}>{name}</div>
      {/* <div>twitter: {twitter}</div>
      <div>github: {github}</div>
      <div>facebook: {facebook}</div> */}
    </div>
  </div>
);
const SimpleStaffCard = ({ name, icon, twitter, github, facebook }: Staff) => (
  <div className={"flex flex-row"}>
    <div className={"m-[12px] text-secondary-600 font-bold underline"}>{name}</div>
  </div>
);

const StaffPage = ({ rows = [] }: { rows: Staff[] }) => {
  const { t } = useTranslation("STAFF");
  const [c, setContents] = useState({
    p1:"",
    p2:"",
    p3:"",
  });
  useEffect(() => {
    setContents({...c, 
        p1:t("P1"),
        p2:t("P2"),
        p3:t("P3"),
    })
  },[t]);

  return (
    <>
      <PageTitle title='Staff' />
      <SectionTitle title='Chair' subTitle='座長'/>
      <div className="lg:mx-[80px] mx-[20px] mb-[60px] flex lg:flex-row flex-col">
        <Image
          src={"/staff/Lina_katayose(Selina).jpg"}
          alt={""}
          width={250}
          height={447}
          className="self-center object-contain rounded-[50%] shadow-lg m-[16px]"
        />
        <div className="p-[16px]">
          <h4 className="mb-[16px] text-primary-900 text-2xl font-bold">片寄 里菜 / Lina KATAYOSE(selina)</h4>
          <p className="mb-[16px] text-alt-black">{c.p1}</p>
          <p className="mb-[16px] text-alt-black">{c.p2}</p>
          <p className="mb-[16px] text-alt-black">{c.p3}</p>
        </div>
      </div>
      
      <SectionTitle title='Core Staff' subTitle='コアスタッフ'/>
      <div className={"lg:mx-[128px] mx-[96px] mb-[60px] grid lg:grid-cols-4 grid-cols-1 gap-4"}>
        {rows.map((row, index) => (
          <StaffCard
            key={index}
            name={row.name}
            icon={row.icon}
            twitter={row.twitter}
            github={row.github}
            facebook={row.facebook}
          />
        ))}
      </div>

      <SectionTitle title='Staff On The Day' subTitle='当日スタッフ'/>
      <div className={"mx-[128px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
        {rows.map((row, index) => (
          <SimpleStaffCard
            key={index}
            name={row.name}
            icon={row.icon}
            twitter={row.twitter}
            github={row.github}
            facebook={row.facebook}
          />
        ))}
      </div>

      <SectionTitle title='Reviewer' subTitle='レビュワー'/>
      <div className={"mx-[128px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
        {rows.map((row, index) => (
          <SimpleStaffCard
            key={index}
            name={row.name}
            icon={row.icon}
            twitter={row.twitter}
            github={row.github}
            facebook={row.facebook}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const buffer = fs.readFileSync("./src/data/staff.csv");
  const rows: Staff[] = parse(buffer, { delimiter: ",", columns: true });

  return {
    props: {
      rows,
    },
  };
};

export default StaffPage;
