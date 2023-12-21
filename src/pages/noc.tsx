import PageTitle from "@/components/elements/PageTitle";
import SectionTitle from "@/components/elements/SectionTitle";
import PageHead from "@/components/elements/PageHead";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const ArchitectureComponent = () => {
  const { t } = useTranslation("CONTENTS");
  const arc_img = "/network_arch.png"
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

const NocPage = () => {
  return (
    <>
      <PageHead />
      <PageTitle title='NOC' />
      <ArchitectureComponent />
    </>
  )
}

export default NocPage;