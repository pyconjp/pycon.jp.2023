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
          <div className={"bg-[#ffffff] rounded-lg mt-[12px] mb-[12px] p-[200px] relative"}>
            <img
              src="https://img.noc.pycon.jp/img/noc_topology.png"
              alt=""
              className={"object-contain m-auto max-w-[100%] max-h-[100%] "}
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
            <div className="mt-10">
              <img
                src="https://img.noc.pycon.jp/img/noc_img1.png"
                alt=""
                className={"object-contain m-auto max-w-[100%] max-h-[100%] "}
              />
            </div>
            <div className="mt-10">
              <img
                src="https://img.noc.pycon.jp/img/noc_img2.png"
                alt=""
                className={"object-contain m-auto max-w-[100%] max-h-[100%] "}
              />
            </div>
            <div className="mt-10">
              <img
                src="https://img.noc.pycon.jp/img/noc_img3.png"
                alt=""
                className={"object-contain m-auto max-w-[100%] max-h-[100%] "}
              />
            </div>
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