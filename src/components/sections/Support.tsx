import SectionTitle from "@/components/elements/SectionTitle";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SupportSection() {
  const { t } = useTranslation("SUPPORT");

  return (
    <div className="flex-row items-center px-[5%] sm:px-[10%] xl:px-[20%] lg:py-[60px] py-20">
      <SectionTitle title="Support" subTitle="" />
      <div className="flex flex-col md:flex-row justify-center gap-8 items-center md:items-stretch">
        <div className="bg-white shadow-lg rounded-lg w-fit max-w-[320px]">
          <Image
            src="/food_support.png"
            alt="Food support image"
            width={320}
            height={160}
            className="rounded-t-lg"
          />
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
          <Image
            src="/nursery_support.png"
            alt="Nursery support image"
            width={320}
            height={160}
            className="rounded-t-lg"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 italic">
              {t("NURSERY_TITLE")}
            </h5>
            <h5 className="text-tertiary-600 font-montserrat italic mr-[16px]">
              {t("NURSERY_SUB_TITLE")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {t("NURSERY_DESCRIPTION")}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-fit max-w-[320px]">
          <Image
            src="/distant_support.png"
            alt="Distant support image"
            width={320}
            height={160}
            className="rounded-t-lg"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 italic">
              {t("DISTANT_TITLE")}
            </h5>
            <h5 className="text-tertiary-600 font-montserrat italic mr-[16px]">
              {t("DISTANT_SUB_TITLE")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {t("DISTANT_DESCRIPTION")}
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
