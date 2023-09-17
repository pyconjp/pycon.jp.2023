import * as fs from "fs";
import {GetStaticProps} from "next";
import Image from "next/image";
import {Division, Staff} from "@/types/staff";
import {useTranslation} from "react-i18next";
import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import path from "path";

type Props = {
    staff: Staff;
    bio?: string[];
};

const StaffCard = ({staff}: { staff: Staff }) => (
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
                <TwitterIcon account={staff.twitter}/>
                <GithubIcon account={staff.github}/>
                <FacebookIcon account={staff.facebook}/>
                <MastodonIcon account={staff.mastodon}/>
            </div>
        </div>
    </div>
);

const ViceChairCard = ({staff, bio = []}: Props) => (
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
                    <p key={index}
                       className={"mb-[16px] lg:text-base text-sm text-alt-black whitespace-pre-wrap"}>{text}</p>)
                )
            }
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

const SupervisorCard = ({staff, bio = []}: Props) => (
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
                        <p key={index}
                           className={"mb-[16px] lg:text-base text-sm text-alt-black whitespace-pre-wrap"}>{text}</p>
                    )
                )
            }
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

interface SocialIconProps {
    src: string;
    url: string;
    alt: string;
    size?: number;
}

const iconMaker = (getProps: (account: string) => SocialIconProps) => {
    // eslint-disable-next-line react/display-name
    return ({account}: { account: string }) => {
        if (account === "") return null;
        return <SocialIcon {...getProps(account)} />
    }
}

const TwitterIcon = iconMaker(account => {
    return {
        src: '/twitter_b.svg',
        url: `https://twitter.com/${account}`,
        alt: `@${account}`
    }
});


const GithubIcon = ({account}: { account: string }) => {
    if (account === "") return null;
    return <SocialIcon src="/github_b.svg" url={`https://github.com/${account}`} alt={`https://github.com/${account}`}/>
}

const FacebookIcon = ({account}: { account: string }) => {
    if (account === "") return null;
    return <SocialIcon src="/facebook_b.svg" url={`https://www.facebook.com/${account}`}
                       alt={`https://www.facebook.com/${account}`}/>
}

const MastodonIcon = ({account}: { account: string }) => {
    if (account === "") return null;
    const [_, user, server] = account.split('@');
    return <SocialIcon src="/mastodon_b.svg" url={`https://${server}/@${user}`} alt={account}/>
}

const SocialIcon = ({src, url, alt}: { src: string, url: string, alt: string }) => {
    return <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
            src={src}
            alt={alt}
            width={20}
            height={20}
            className={"mr-[8px] hover:opacity-50"}
        /></a>
}

const SimpleStaffCard = ({staff}: { staff: Staff }) => (
    <div className={"flex flex-row"}>
        <div className={"m-[12px] text-secondary-600 font-bold underline"}>{staff.name}</div>
    </div>
);

const StaffPage = ({rows = []}: { rows: Staff[] }) => {
    const {t} = useTranslation("STAFF");

    const divisions = splitDivisons(rows);
    const chair = divisions.chair[0];
    const vicechair1 = divisions.vicechair1[0];
    const vicechair2 = divisions.vicechair2[0];
    const supervisor1 = divisions.supervisor1[0];

    return (
        <>
            <PageTitle title='Staff'/>
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
                    <p className="mb-[16px] text-alt-black">{t("selina_bio1")}</p>
                    <p className="mb-[16px] text-alt-black">{t("selina_bio2")}</p>
                    <p className="mb-[16px] text-alt-black">{t("selina_bio3")}</p>
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
                        <a href={"https://www.facebook.com/" + chair.facebook} target="_blank"
                           rel="noopener noreferrer">
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

            <SectionTitle title='Vice Chair & Supervisor' subTitle='副座長＆スーパーバイザー'/>
            <div
                className={"lg:mx-[80px] mx-[20px] mb-[60px] flex flex-col lg:flex-row gap-12 lg:gap-2 justify-center"}>
                <ViceChairCard
                    staff={vicechair1}
                    bio={[t("peacock_bio")]}
                />
                <ViceChairCard
                    staff={vicechair2}
                    bio={[t("ainamori_bio")]}
                />
                <SupervisorCard
                    staff={supervisor1}
                    bio={[t("yoshida_bio")]}
                />
            </div>

            <SectionTitle title='Core Staff' subTitle='コアスタッフ'/>
            <div className={"lg:mx-[128px] mb-[60px] grid lg:grid-cols-4  gap-4 justify-center"}>
                {divisions.core.map((row, index) => (
                    <StaffCard
                        key={index}
                        staff={row}
                    />
                ))}
            </div>


            {
                divisions.day.length > 0 &&
              <>
                <SectionTitle title='Staff On The Day' subTitle='当日スタッフ'/>
                <div
                  className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
                    {divisions.day.map((row, index) => (
                        <SimpleStaffCard key={index} staff={row}/>
                    ))}
                </div>
              </>
            }

            <SectionTitle title='Reviewer' subTitle='レビュワー'/>
            <div
                className={"lg:mx-[128px] mx-[20px] mb-[60px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4"}>
                {divisions.reviewer.map((row, index) => (
                    <SimpleStaffCard key={index} staff={row}/>
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

type StaffByDivision = { [key in Division]: Array<Staff> };

function splitDivisons(rows: Array<Staff>): StaffByDivision {
    const ret: StaffByDivision = {
        core: [],
        chair: [],
        day: [],
        reviewer: [],
        vicechair1: [],
        vicechair2: [],
        supervisor1: [],
    };
    for (const staff of rows) {
        ret[staff.division].push(staff);
    }
    return ret;
}

export const getStaticProps: GetStaticProps = async () => {
    // JSON ファイルを読み込む
    const jsonPath = path.join(process.cwd(), 'src', 'data', 'staff.json')
    const jsonText = fs.readFileSync(jsonPath, 'utf-8')
    const rows = JSON.parse(jsonText) as Staff[]

    // ページコンポーネントに渡す props オブジェクトを設定する
    return {props: {rows}}
};

export default StaffPage;
