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

const StaffCard = ({ name, icon, twitter, github, facebook, division }: Staff) => (
  <div className={"flex items-center gap-2 flex-row"}>
    <Image
        src={"/staff/" + icon}
        alt={name}
        width={600}
        height={600}
        className={"flex-1 rounded-[10px] max-w-[60px] min-w-[60px]"}
      />
    <div className={"flex flex-col m-[12px]"}>
      <div className={"mb-[6px] font-bold"}>{name}</div>
      <div className={"flex flex-row items-center"}>
        {(twitter !== "")
        && <a href={"https://twitter.com/" + twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter_b.svg"
            alt=""
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
          />
        </a>
        }
        {github !== ""
        && <a href={"https://github.com/" + github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/github_b.svg"
            alt=""
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
          />
        </a>
        }
        {(facebook !== "")
        && <a href={"https://www.facebook.com/" + facebook} target="_blank" rel="noopener noreferrer">
          <Image
            src="/facebook_b.svg"
            alt=""
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
          />
        </a>
        }
      </div>
    </div>
  </div>
);

const SimpleStaffCard = ({ name, icon, twitter, github, facebook, division }: Staff) => (
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
    h1:"",
    p4:"",
    a1:"",
  });
  useEffect(() => {
    setContents({...c, 
        p1:t("P1"),
        p2:t("P2"),
        p3:t("P3"),
        h1:t("H1"),
        p4:t("P4"),
        a1:t("A1"),
    })
  },[t]);
  let chair:Staff = {name:"",icon:"",twitter:"",github:"",facebook:"",division:""};
  rows.forEach((staff) => {
    if (staff.division === "chair") {
      chair = staff;
    }
  })

  return (
    <>
      <PageTitle title='Staff' />
      <SectionTitle title='Chair' subTitle='座長'/>
      <div className={"lg:mx-[80px] mx-[20px] mb-[60px] flex lg:flex-row flex-col"}>
        <Image
          src={"/staff/Lina_katayose(Selina).jpg"}
          alt={""}
          width={250}
          height={447}
          className="self-center object-contain rounded-[50%] shadow-lg m-[16px]"
        />
        <div className="p-[16px]">
          <h4 className="mb-[16px] text-primary-900 text-2xl font-bold">{chair.name}</h4>
          <p className="mb-[16px] text-alt-black">{c.p1}</p>
          <p className="mb-[16px] text-alt-black">{c.p2}</p>
          <p className="mb-[16px] text-alt-black">{c.p3}</p>
          <div className="flex flex-row items-center">
            <a href={"https://twitter.com/" + chair.twitter} target="_blank" rel="noopener noreferrer">
              <Image
                src="/twitter_b.svg"
                alt=""
                width={30}
                height={30}
                className={"mr-[10px] hover:opacity-50"}
              />
            </a>
            <a href={"https://github.com/" + chair.github} target="_blank" rel="noopener noreferrer">
              <Image
                src="/github_b.svg"
                alt=""
                width={30}
                height={30}
                className={"mr-[10px] hover:opacity-50"}
              />
            </a>
            <a href={"https://www.facebook.com/" + chair.facebook} target="_blank" rel="noopener noreferrer">
              <Image
                src="/facebook_b.svg"
                alt=""
                width={30}
                height={30}
                className={"mr-[10px] hover:opacity-50"}
              />
            </a>
          </div>
        </div>
      </div>

      <SectionTitle title='Core Staff' subTitle='コアスタッフ'/>
      <div className={"lg:mx-[128px] mb-[60px] grid lg:grid-cols-4  gap-4 justify-center"}>
        {rows.map((row, index) => (
          (row.division === "core")
          && <StaffCard
            key={index}
            name={row.name}
            icon={row.icon}
            twitter={row.twitter}
            github={row.github}
            facebook={row.facebook}
            division={row.division}
          />
        ))}
      </div>

      <SectionTitle title='Staff On The Day' subTitle='当日スタッフ'/>
      <div className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
        {rows.map((row, index) => (
          (row.division === "day")
          && <SimpleStaffCard
            key={index}
            name={row.name}
            icon={row.icon}
            twitter={row.twitter}
            github={row.github}
            facebook={row.facebook}
            division={row.division}
          />
        ))}
      </div>

      <SectionTitle title='Reviewer' subTitle='レビュワー'/>
      <div className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
        {rows.map((row, index) => (
          (row.division === "reviewer")
          && <SimpleStaffCard
            key={index}
            name={row.name}
            icon={row.icon}
            twitter={row.twitter}
            github={row.github}
            facebook={row.facebook}
            division={row.division}
          />
        ))}
      </div>

      <div className="lg:mx-[131px] mx-[16px] lg:my-[81px] my-[60px] py-[32px] bg-[#ffffff] shadow-lg rounded-lg">
        <div className="flex flex-col mx-[72px]">
          <div className='before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-ml-8 before:-mt-2  before:content-[url("/ellipse.svg")] before:inline-block ml-0 pl-8'>
            <h3 className="lg:text-2xl text-xl text-alt-black font-bold inline">
              {c.h1}
            </h3>
          </div>
          <p className="text-alt-black text-lg p-[12px]">{c.p4}</p>
          <div className="ml-[auto]">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3Zw3b-X9KMo81G9BJJFFfq6jYzzUAviLZALzhiCFeFuMybQ/viewform"
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
