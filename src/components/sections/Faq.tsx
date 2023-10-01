import SectionTitle from "@/components/elements/SectionTitle";
import SectionSubTitle from "@/components/elements/SectionSubTitle";
import { useTranslation } from "react-i18next";
import ExternalLink from "@/components/elements/ExternalLink";
import Separator from "@/components/elements/Separator";

export default function FaqSection() {
  const { t } = useTranslation("FAQ");

  return (
    <div className="flex-row items-center px-[5%] sm:px-[10%] xl:px-[20%] lg:py-[60px] py-20">
      <SectionTitle title="FAQ" subTitle="よくある質問" />
      <SectionSubTitle
        title={"Q. 遠方参加者への支援制度について教えてください。"}
        subTitle={""}
        className="subTitle"
      />
      <p className="text-alt-black text-lg p-[12px]">
        A. 旅費支援の申請受付は終了しました。
      </p>
      <Separator />
      <SectionSubTitle
        title={"Q. カンファレンスのTシャツはどこで購入できますか?"}
        subTitle={""}
        className="subTitle"
      />
      <p className="text-alt-black text-lg p-[12px]">
        A. チケットにTシャツが含まれています。
      </p>
      <div className="lg:p-12 py-8 px-6 shadow rounded-lg">
        <div className="mb-5"></div>
        <ExternalLink text={t("ACCESS")} url="https://pyconjp.blogspot.com/" />
      </div>
    </div>
  );
}
