import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import PageHead from "@/components/elements/PageHead";
import Image from "next/image";

export const ArchitectureComponent = () => {
  return(
    <>
      <SectionTitle title={'Architecture'} subTitle={'アーキテクチャ'} />

      <div className={"relative"}>
        <div className={"z-20 relative"}>
          <div className={"bg-[#ffffff] rounded-lg mt-[72px] mb-[72px] p-[200px] relative"}>
            <Image
              src="pyconapac2023_ogp.png"
              alt=""
              fill
              className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export const RealtimeMonitorComponent = () => {
  return(
    <>
      <SectionTitle title={'Real-time Monitor'} subTitle={'リアルタイムモニター'} />

      <div className={"relative"}>
        <div className={"z-20 relative"}>
          <div className={"bg-[#ffffff] rounded-lg mt-[72px] mb-[72px] relative"}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/e_EbzeBf06g"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={"m-auto"}>
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
};

const NocPage = () => {
  return(
    <>
      <PageHead/>
      <PageTitle title='NOC' />
      <ArchitectureComponent />
      <RealtimeMonitorComponent />
    </>
  )
}

export default NocPage;