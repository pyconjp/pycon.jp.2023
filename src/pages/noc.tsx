import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import PageHead from "@/components/elements/PageHead";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const ArchitectureComponent = () => {
  const { t } = useTranslation("CONTENTS");
  const arc_img = `https://img.noc.pycon.jp/img/noc_topology.png?${(new Date).getTime()}`
  return (
    <>
      <SectionTitle title={'Architecture'} subTitle={t("NOC.ARCHITECTURE")} />

      <div className={"my-12 lg:w-8/12 w-10/12 mx-auto"}>
        <img
          src={arc_img}
          alt=""
          className="w-full"
        />
      </div>
    </>
  )
};

export const RealtimeMonitorComponent = () => {
  const { t } = useTranslation("CONTENTS");
  const monitor01_img = `https://img.noc.pycon.jp/img/noc_img1.png?${(new Date).getTime()}`
  const monitor02_img = `https://img.noc.pycon.jp/img/noc_img2.png?${(new Date).getTime()}`
  const monitor03_img = `https://img.noc.pycon.jp/img/noc_img3.png?${(new Date).getTime()}`
  return (
    <>
      <SectionTitle title={'Real-time Monitor'} subTitle={t("NOC.REALTIMEMONITOR")} />
      <div className={"my-12 lg:w-8/12 w-10/12 mx-auto"}>
        <div className='font-bold text-center'>
          機材障害により公開中断中
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