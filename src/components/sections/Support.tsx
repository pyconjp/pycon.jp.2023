import SectionTitle from "@/components/elements/SectionTitle";
import SectionSubTitle from "@/components/elements/SectionSubTitle";
import { useTranslation } from "react-i18next";
import ExternalLink from "@/components/elements/ExternalLink";
import Separator from "@/components/elements/Separator";
import { Faq } from "@/types/faq";

export default function SupportSection() {
  const { t } = useTranslation("SUPPORT");

  return (
    <div className="flex-row items-center px-[5%] sm:px-[10%] xl:px-[20%] lg:py-[60px] py-20">
      <SectionTitle title="Support" subTitle="" />
      <div className="flex justify-center gap-8">
        <div className="bg-white shadow-lg rounded-lg w-fit max-w-[320px]">
          <img className="rounded-t-lg" src="/food_support.png" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 italic">
              {t("FOOD_TITLE")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {t("FOOD_DESCRIPTION")}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-fit max-w-[320px]">
          <img className="rounded-t-lg" src="/nursery_support.png" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 italic">
              {t("NURSERY_TITLE")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {t("NURSERY_DESCRIPTION")}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-fit max-w-[320px]">
          <img className="rounded-t-lg" src="/distant_support.png" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 italic">
              {t("DISTANT_TITLE")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {t("DISTANT_DESCRIPTION")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
