import * as fs from "fs";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Staff } from "@/types/staff";
import { useTranslation } from "react-i18next";
import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import PageHead from "@/components/elements/PageHead";
import path from "path";

type Props = {
  staff: Staff;
  bio?: string[];
};

const ChairCard = ({ staff, bio = [] }: Props) => (
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
      {bio.map((text, index) => (<p key={index} className={"mb-[16px] text-base text-alt-black"}>{text}</p>))}
      <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
          && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
            <svg className={"mr-[8px] hover:opacity-50"} width="30" height="30" viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg">
              <rect height="100%" width="100%" rx="10%" ry="10%" />
              <path d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z" fill="#fff" />
            </svg>
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

const ViceChairCard = ({ staff, bio = [] }: Props) => (
  <div className={"flex-1 flex flex-col"}>
    <Image
      src={"/staff/" + staff.icon}
      alt={staff.name}
      width={180}
      height={180}
      className={"self-center object-contain rounded-[50%] shadow-lg m-[16px]"}
    />
    <div className={"p-[16px]"}>
      <div className={"mb-[16px] flex flex-col"}>
        <h4 className={"font-montserrat italic text-primary-600 text-base"}>Vice chair</h4>
        <p className={"text-primary-900 text-2xl font-bold"}>{staff.name}</p>
      </div>
      {
        bio.map((text, index) => (
          <p key={index} className={"mb-[16px] lg:text-base text-sm text-alt-black whitespace-pre-wrap"}>{text}</p>)
        )
      }
      <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
          && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
            <svg className={"mr-[8px] hover:opacity-50"} width="30" height="30" viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg">
              <rect height="100%" width="100%" rx="10%" ry="10%" />
              <path d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z" fill="#fff" />
            </svg>
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

const SupervisorCard = ({ staff, bio = [] }: Props) => (
  <div className={"flex-1 flex flex-col"}>
    <Image
      src={"/staff/" + staff.icon}
      alt={staff.name}
      width={180}
      height={180}
      className={"self-center object-contain rounded-[50%] shadow-lg m-[16px]"}
    />
    <div className={"p-[16px]"}>
      <div className={"mb-[16px] flex flex-col"}>
        <h4 className={"font-montserrat italic text-primary-600 text-base"}>Supervisor</h4>
        <p className={"text-primary-900 text-2xl font-bold"}>{staff.name}</p>
      </div>
      {
        bio.map((text, index) => (
          <p key={index} className={"mb-[16px] lg:text-base text-sm text-alt-black whitespace-pre-wrap"}>{text}</p>
        )
        )
      }
      <div className={"flex flex-row items-center"}>
        {(staff.twitter !== "")
          && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
            <svg className={"mr-[8px] hover:opacity-50"} width="30" height="30" viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg">
              <rect height="100%" width="100%" rx="10%" ry="10%" />
              <path d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z" fill="#fff" />
            </svg>
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

const StaffCard = ({ staff }: Props) => (
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
            <svg className={"mr-[8px] hover:opacity-50"} width="20" height="20" viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg">
              <rect height="100%" width="100%" rx="10%" ry="10%" />
              <path d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z" fill="#fff" />
            </svg>
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

const SimpleStaffCard = ({ staff }: Props) => (
  <div className={"flex flex-col m-[12px]"}>
    <div className={"mb-[6px] text-secondary-600 font-bold underline"}>{staff.name}</div>
    <div className={"flex flex-row items-center"}>
      {(staff.twitter !== "")
        && <a href={"https://twitter.com/" + staff.twitter} target="_blank" rel="noopener noreferrer">
          <svg className={"mr-[8px] hover:opacity-50"} width="20" height="20" viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg">
            <rect height="100%" width="100%" rx="10%" ry="10%" />
            <path d="m1014.2 805.8 446.7-519.3h-105.9l-387.9 450.9-309.8-450.9h-357.3l468.5 681.8-468.5 544.6h105.9l409.6-476.2 327.2 476.2h357.3zm-145 168.5-47.5-67.9-377.7-540.2h162.6l304.8 436 47.5 67.9 396.2 566.7h-162.6z" fill="#fff" />
          </svg>
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

  return (
    <>
      <PageHead />
      <PageTitle title='Staff' />
      <SectionTitle title='Chair' subTitle='座長' />
      <div className={"lg:mx-[80px] mx-[20px] mb-[60px] flex lg:flex-row flex-col"}>
        {rows.map((row, index) => (
          (row.division === "chair")
          && <ChairCard
            key={index}
            staff={{
              name: row.name,
              icon: row.icon,
              twitter: row.twitter,
              github: row.github,
              facebook: row.facebook,
              division: row.division
            }}
            bio={[t("selina_bio1"), t("selina_bio2"), t("selina_bio3")]}
          />
        ))}
      </div>

      <SectionTitle title='Vice Chair & Supervisor' subTitle='副座長＆スーパーバイザー' />
      <div className={"lg:mx-[80px] mx-[20px] mb-[60px] flex flex-col lg:flex-row gap-12 lg:gap-2 justify-center"}>
        {rows.map((row, index) => (
          (row.division === "vicechair1")
          && <ViceChairCard
            key={index}
            staff={{
              name: row.name,
              icon: row.icon,
              twitter: row.twitter,
              github: row.github,
              facebook: row.facebook,
              division: row.division
            }}
            bio={[t("peacock_bio")]}
          />
        ))}
        {rows.map((row, index) => (
          (row.division === "vicechair2")
          && <ViceChairCard
            key={index}
            staff={{
              name: row.name,
              icon: row.icon,
              twitter: row.twitter,
              github: row.github,
              facebook: row.facebook,
              division: row.division
            }}
            bio={[t("ainamori_bio")]}
          />
        ))}
        {rows.map((row, index) => (
          (row.division === "supervisor1")
          && <SupervisorCard
            key={index}
            staff={{
              name: row.name,
              icon: row.icon,
              twitter: row.twitter,
              github: row.github,
              facebook: row.facebook,
              division: row.division
            }}
            bio={[t("yoshida_bio")]}
          />
        ))}
      </div>

      <SectionTitle title='Core Staff' subTitle='コアスタッフ' />
      <div className={"lg:mx-[128px] mb-[60px] grid lg:grid-cols-4  gap-4 justify-center"}>
        {rows.map((row, index) => (
          (row.division === "core")
          && <StaffCard
            key={index}
            staff={{
              name: row.name,
              icon: row.icon,
              twitter: row.twitter,
              github: row.github,
              facebook: row.facebook,
              division: row.division
            }}
          />
        ))}
      </div>

      {
        rows.filter(r => r.division === "day").length > 0 &&
        <>
          <SectionTitle title='Staff On The Day' subTitle='当日スタッフ' />
          <div className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
            {rows.map((row, index) => (
              (row.division === "day")
              && <SimpleStaffCard
                key={index}
                staff={{
                  name: row.name,
                  icon: row.icon,
                  twitter: row.twitter,
                  github: row.github,
                  facebook: row.facebook,
                  division: row.division
                }}
              />
            ))}
          </div>
        </>
      }

      <SectionTitle title='Reviewer' subTitle='レビュワー' />
      <div className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
        {rows.map((row, index) => (
          (row.division === "reviewer")
          && <SimpleStaffCard
            key={index}
            staff={{
              name: row.name,
              icon: row.icon,
              twitter: row.twitter,
              github: row.github,
              facebook: row.facebook,
              division: row.division
            }}
          />
        ))}
      </div>

      <div className="lg:mx-[131px] mx-[16px] lg:my-[81px] my-[60px] py-[32px] bg-[#ffffff] shadow-lg rounded-lg">
        <div className="flex flex-col mx-[72px]">
          <div
            className='before:top-1/2 before:w-4 before:h-4 before:mr-4 before:-ml-8 before:-mt-2  before:content-[url("/ellipse.svg")] before:inline-block ml-0 pl-8'>
            <h3 className="lg:text-2xl text-xl text-alt-black font-bold inline">
              {t("recruite_title")}
            </h3>
          </div>
          <p className="text-alt-black lg:text-lg text-base p-[12px]">{t("recruite_text")}</p>
          <div className="ml-[auto]">
            {/* 募集フォーム有効 */}
            {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3Zw3b-X9KMo81G9BJJFFfq6jYzzUAviLZALzhiCFeFuMybQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row text-primary-500 underline hover:opacity-50">
              <p className={"lg:text-lg text-base"}>{c.recruite_link}</p>
              <Image
                src={"/linkout_p.svg"}
                alt={""}
                width={20}
                height={20}
                className="object-contain ml-[3px]"
              />
          </a> */}
            {/* 募集フォーム無効 */}
            <div className="flex flex-row text-primary-500 underline">
              <p className={"lg:text-lg text-base"}>{t("recruite_link")}</p>
              <Image
                src={"/linkout_p.svg"}
                alt={""}
                width={20}
                height={20}
                className="object-contain ml-[3px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // JSON ファイルを読み込む
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'staff.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const rows = JSON.parse(jsonText) as Staff[]

  // ページコンポーネントに渡す props オブジェクトを設定する
  return { props: { rows } }
};

export default StaffPage;
