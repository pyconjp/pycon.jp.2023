import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import PageHead from "@/components/elements/PageHead";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const ArchitectureComponent = () => {
  const { t } = useTranslation("CONTENTS");
  return (
    <>
      <SectionTitle title={'Architecture'} subTitle={t("NOC.ARCHITECTURE")} />

      <div className={"relative"}>
        <div className={"z-20 relative"}>
          <div className={"bg-[#ffffff] rounded-lg mt-[72px] mb-[72px] p-[200px] relative"}>
            <Image
              src="https://img.noc.pycon.jp/img/noc_topology.png"
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
  const { t } = useTranslation("CONTENTS");
  return (
    <>
      <SectionTitle title={'Real-time Monitor'} subTitle={t("NOC.REALTIMEMONITOR")} />

      <div className={"relative"}>
        <div className={"z-20 relative"}>
          <div className={"bg-[#ffffff] rounded-lg mt-[72px] mb-[72px] p-[200px] relative"}>
            <Image
              src="https://img.noc.pycon.jp/img/noc_img1.png"
              alt=""
              fill
              className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
            />
          </div>
        </div>
      </div>
      <div className={"relative"}>
        <div className={"z-20 relative"}>
          <div className={"bg-[#ffffff] rounded-lg mt-[72px] mb-[72px] p-[200px] relative"}>
            <Image
              src="https://img.noc.pycon.jp/img/noc_img2.png"
              alt=""
              fill
              className={"object-contain m-auto max-w-[70%] max-h-[80%] absolute"}
            />
          </div>
        </div>
      </div>
      <div className={"relative"}>
        <div className={"z-20 relative"}>
          <div className={"bg-[#ffffff] rounded-lg mt-[72px] mb-[72px] p-[200px] relative"}>
            <Image
              src="https://img.noc.pycon.jp/img/noc_img3.png"
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

const NocPage = () => {
  return (
    <>
      <PageHead />
      <PageTitle title='NOC' />
      <ArchitectureComponent />
      <RealtimeMonitorComponent />
    </>
  )
}

export default NocPage;