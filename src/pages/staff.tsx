import * as fs from "fs";
import { parse } from "csv-parse/sync";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Staff } from "@/types/staff";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";

type Props = {
  staff: Staff;
  bio?: string[];
};

const ChairCard = ({staff, bio=[]}:Props) => (
  <div className={"lg:mx-[80px] mx-[20px] mb-[60px] flex lg:flex-row flex-col"}>
    <Image
      src={"/staff/" + staff.icon}
      alt={staff.name}
      width={250}
      height={447}
      className={"self-center object-contain rounded-[50%] shadow-lg m-[16px]"}
    />
    <div className={"p-[16px]"}>
      <h4 className={"mb-[16px] text-primary-900 text-2xl font-bold"}>{staff.name}</h4>
      {bio.map((text) => (
        <p className={"mb-[16px] text-alt-black"}>{text}</p>
      ))}
      <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
        && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.github !== "")
        && <a href={"https://github.com/" + staff.github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/github_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.facebook !== "")
        && <a href={"https://www.facebook.com/" + staff.facebook} target="_blank" rel="noopener noreferrer">
          <Image
            src="/facebook_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
      </div>
    </div>
  </div>
);

const ViceChairCard = ({staff, bio=[]}:Props) => (
  <div className={"mb-[60px] flex flex-col"}>
    <Image
      src={"/staff/" + staff.icon}
      alt={staff.name}
      width={170}
      height={170}
      className={"self-center object-contain rounded-[50%] shadow-lg m-[16px]"}
    />
    <div className={"p-[16px]"}>
      <div className={"mb-[16px] flex flex-col"}>
        <h4 className={"font-montserrat italic text-primary-600 text-base"}>Vice chair</h4>
        <p className={"text-primary-900 text-2xl font-bold"}>{staff.name}</p>
      </div>
      {bio.map((text) => (
        <p className={"mb-[16px] text-alt-black"}>{text}</p>
      ))}
      <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
        && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.github !== "")
        && <a href={"https://github.com/" + staff.github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/github_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.facebook !== "")
        && <a href={"https://www.facebook.com/" + staff.facebook} target="_blank" rel="noopener noreferrer">
          <Image
            src="/facebook_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
      </div>
    </div>
  </div>
);

const SupervisorCard = ({staff, bio=[]}:Props) => (
  <div className={"mb-[60px] flex flex-col"}>
    <Image
      src={"/staff/" + staff.icon}
      alt={staff.name}
      width={170}
      height={170}
      className={"self-center object-contain rounded-[50%] shadow-lg m-[16px]"}
    />
    <div className={"p-[16px]"}>
      <div className={"mb-[16px] flex flex-col"}>
        <h4 className={"font-montserrat italic text-primary-600 text-base"}>Supervisor</h4>
        <p className={"text-primary-900 text-2xl font-bold"}>{staff.name}</p>
      </div>
      {bio.map((text) => (
        <p className={"mb-[16px] text-alt-black"}>{text}</p>
      ))}
      <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
        && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.github !== "")
        && <a href={"https://github.com/" + staff.github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/github_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.facebook !== "")
        && <a href={"https://www.facebook.com/" + staff.facebook} target="_blank" rel="noopener noreferrer">
          <Image
            src="/facebook_b.svg"
            alt=""
            width={30}
            height={30}
            className={"mr-[10px] hover:opacity-50"}
          />
        </a>
        }
      </div>
    </div>
  </div>
);

const StaffCard = ({staff}:Props) => (
  <div className={"flex items-center gap-2 flex-row"}>
    <Image
        src={"/staff/" + staff.icon}
        alt={staff.name}
        width={600}
        height={600}
        className={"flex-1 rounded-[10px] max-w-[60px] min-w-[60px]"}
      />
    <div className={"flex flex-col m-[12px]"}>
      <div className={"mb-[6px] font-bold"}>{staff.name}</div>
      <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
        && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter_b.svg"
            alt=""
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.github !== "")
        && <a href={"https://github.com/" + staff.github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/github_b.svg"
            alt=""
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.facebook !== "")
        && <a href={"https://www.facebook.com/" + staff.facebook} target="_blank" rel="noopener noreferrer">
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

const SimpleStaffCard = ({staff}:Props) => (
  <div className={"flex flex-col m-[12px]"}>
    <div className={"mb-[6px] text-secondary-600 font-bold underline"}>{staff.name}</div>
    <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
        && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter_b.svg"
            alt=""
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.github !== "")
        && <a href={"https://github.com/" + staff.github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/github_b.svg"
            alt=""
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
          />
        </a>
        }
        {(staff.facebook !== "")
        && <a href={"https://www.facebook.com/" + staff.facebook} target="_blank" rel="noopener noreferrer">
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
  
  
);

const StaffPage = ({ rows = [] }: { rows: Staff[] }) => {
  const { t } = useTranslation("STAFF");
  const [c, setContents] = useState({
    chair_bio1:"",
    chair_bio2:"",
    chair_bio3:"",
    vicechair_bio1:"",
    vicechair_bio2:"",
    supervisor_bio1:"",
    h1:"",
    p7:"",
    a1:"",
  });
  useEffect(() => {
    setContents({...c,
      chair_bio1:t("selina_bio1"),
      chair_bio2:t("selina_bio2"),
      chair_bio3:t("selina_bio3"),
      vicechair_bio1:t("peacock_bio"),
      vicechair_bio2:t("ainamori_bio"),
      supervisor_bio1:t("yoshida_bio"),
      h1:t("H1"),
      p7:t("P7"),
      a1:t("A1"),
    })
  },[t]);

  return (
    <>
      <PageTitle title='Staff' />
      <SectionTitle title='Chair' subTitle='座長'/>
      <div className={"lg:mx-[80px] mx-[20px] mb-[60px] flex lg:flex-row flex-col"}>
        {rows.map((row, index) => (
          (row.division === "chair")
          && <ChairCard
            key={index}
            staff={{
              name:row.name,
              icon:row.icon,
              twitter:row.twitter,
              github:row.github,
              facebook:row.facebook,
              division:row.division
            }}
            bio={[c.chair_bio1, c.chair_bio2, c.chair_bio3]}
          />
        ))}
      </div>

      <SectionTitle title='Vice Chair & Supervisor' subTitle='副座長＆スーパーバイザー' />
      <div className={"lg:mx-[80px] mx-[20px] mb-[60px] grid grid-cols-3 gap-2 justify-center"}>
        {rows.map((row, index) => (
          (row.division === "vicechair1")
          && <ViceChairCard
            key={index}
            staff={{
              name:row.name,
              icon:row.icon,
              twitter:row.twitter,
              github:row.github,
              facebook:row.facebook,
              division:row.division
            }}
            bio={[c.vicechair_bio1]}
          />
        ))}
        {rows.map((row, index) => (
          (row.division === "vicechair2")
          && <ViceChairCard
            key={index}
            staff={{
              name:row.name,
              icon:row.icon,
              twitter:row.twitter,
              github:row.github,
              facebook:row.facebook,
              division:row.division
            }}
            bio={[c.vicechair_bio2]}
          />
        ))}
        {rows.map((row, index) => (
          (row.division === "supervisor1")
          && <SupervisorCard
            key={index}
            staff={{
              name:row.name,
              icon:row.icon,
              twitter:row.twitter,
              github:row.github,
              facebook:row.facebook,
              division:row.division
            }}
            bio={[c.supervisor_bio1]}
          />
        ))}
      </div>

      <SectionTitle title='Core Staff' subTitle='コアスタッフ'/>
      <div className={"lg:mx-[128px] mb-[60px] grid lg:grid-cols-4  gap-4 justify-center"}>
        {rows.map((row, index) => (
          (row.division === "core")
          && <StaffCard
            key={index}
            staff={{
              name:row.name,
              icon:row.icon,
              twitter:row.twitter,
              github:row.github,
              facebook:row.facebook,
              division:row.division
            }}
          />
        ))}
      </div>

      {
        rows.filter(r => r.division === "day").length > 0 &&
        <>
          <SectionTitle title='Staff On The Day' subTitle='当日スタッフ'/>
          <div className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
            {rows.map((row, index) => (
              (row.division === "day")
              && <SimpleStaffCard
                key={index}
                staff={{
                  name:row.name,
                  icon:row.icon,
                  twitter:row.twitter,
                  github:row.github,
                  facebook:row.facebook,
                  division:row.division
                }}
              />
            ))}
          </div>
        </>
      }

      <SectionTitle title='Reviewer' subTitle='レビュワー'/>
      <div className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
        {rows.map((row, index) => (
          (row.division === "reviewer")
          && <SimpleStaffCard
            key={index}
            staff={{
              name:row.name,
              icon:row.icon,
              twitter:row.twitter,
              github:row.github,
              facebook:row.facebook,
              division:row.division
            }}
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
          <p className="text-alt-black text-lg p-[12px]">{c.p7}</p>
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
