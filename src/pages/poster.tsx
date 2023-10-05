import * as fs from "fs";
import * as path from 'path'
import {Poster} from "@/types/poster";
import {GetStaticProps} from "next";
import {useState} from "react";
import Image from "next/image";
import PageTitle from "@/components/elements/PageTitle";
import PageHead from "@/components/elements/PageHead";
import SectionTitle from "@/components/elements/SectionTitle";

export const PosterPage = ({rows = []}: { rows: Poster[] }) => {
  return (
    <>
      <PageHead/>
      <PageTitle title='Poster Session'/>
      <PosterList rows={rows}/>
    </>
  )
}

function PosterList({ rows = [] }: {rows: Poster[]}) {
    return (
        <>
        <SectionTitle title='General' subTitle='一般'/>
        {
            filterByType(rows, "General").map(
                (row, index) => <GeneralPosterCard key={index}{...row} />
            )
        }

        <SectionTitle title='Community' subTitle='コミュニティ'/>
        {
            filterByType(rows, "Community").map(
                (row, index) => <CommunityPosterCard key={index}{...row} />
            )
        }
        </>
    )
}

const GeneralPosterCard = ({type, place, name, title, abstruct}: Poster) => {
    const [isOpen, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isOpen);
    };

    return (
        <div className={"lg:mx-[120px] mx-[80px] my-[60px]"}>
            <div className={"flex flex-row justify-between cursor-pointer transition duration-300 hover:opacity-60"} onClick={() => handleToggle()}>
                <div className={"flex flex-col grow text-left grow"}>
                    <div className={"flex flex-row items-center"}>
                        <Image
                            src={"/location_b.svg"}
                            alt={""}
                            width={25}
                            height={25}
                            className={"object-contain mr-[6px] w-[20px] h-[20px] min-w-[20px]"}
                        />
                        <h5 className={"font-montserrat italic text-alt-black font-bold lg:text-lg text-base my-[6px]"}>{place}</h5>
                    </div>
                    <h4 className={"text-alt-black font-bold lg:text-2xl text-lg my-[10px]"}>{title}</h4>
                    <h5 className={"text-alt-black lg:text-lg text-sm my-[6px] whitespace-pre-wrap"}>{name}</h5>
                </div>
                <div className="flex items-center">
                    <Image
                        src={isOpen ? "/arrow_up.svg": "/arrow_down.svg"}
                        alt={""}
                        width={25}
                        height={25}
                        className={"object-contain w-[20px] h-[20px] min-w-[20px]"}
                    />
                </div>
            </div>
            <div className={isOpen ? "my-[20px] bg-secondary-100 rounded p-[15px]" : "hidden"}>
                <p className={"lg:text-base text-sm whitespace-pre-wrap"}>{abstruct}</p>
            </div>
            <div className="flex justify-center mb-[100px]">
                <Image
                    src={"/sub_separator.svg"}
                    alt={""}
                    width={286}
                    height={27}
                    className={"object-contain w-[150px] h-[16px]"}
                />
            </div>
        </div>
    )
};

const CommunityPosterCard = ({type, place, name, title, abstruct}: Poster) => {
    const [isOpen, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isOpen);
    };

    return (
        <div className={"lg:mx-[120px] mx-[80px] my-[60px]"}>
            <div className={"flex flex-row justify-between cursor-pointer transition duration-300 hover:opacity-60"} onClick={() => handleToggle()}>
                <div className={"flex flex-col grow text-left grow"}>
                    <div className={"flex flex-row items-center"}>
                        <Image
                            src={"/location_b.svg"}
                            alt={""}
                            width={25}
                            height={25}
                            className={"object-contain mr-[6px] w-[20px] h-[20px] min-w-[20px]"}
                        />
                        <h5 className={"font-montserrat italic text-alt-black font-bold lg:text-lg text-base my-[6px]"}>{place}</h5>
                    </div>
                    <h4 className={"text-alt-black font-bold lg:text-2xl text-lg my-[10px]"}>{name}</h4>
                </div>
                <div className="flex items-center">
                    <Image
                        src={isOpen ? "/arrow_up.svg": "/arrow_down.svg"}
                        alt={""}
                        width={25}
                        height={25}
                        className={"object-contain w-[20px] h-[20px] min-w-[20px]"}
                    />
                </div>
            </div>
            <div className={isOpen ? "my-[20px] bg-secondary-100 rounded p-[15px]" : "hidden"}>
                <p className={"lg:text-base text-sm whitespace-pre-wrap"}>{abstruct}</p>
            </div>
            <div className="flex justify-center mb-[100px]">
                <Image
                    src={"/sub_separator.svg"}
                    alt={""}
                    width={286}
                    height={27}
                    className={"object-contain w-[150px] h-[16px]"}
                />
            </div>
        </div>
    )
};

export const getStaticProps: GetStaticProps = async () => {
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'poster.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const rows = JSON.parse(jsonText) as Poster[]

  return {props: {rows}}
}

const filterByType = (posters: Poster[], type: Poster["type"]) => posters.filter(poster => poster.type === type);

export default PosterPage;