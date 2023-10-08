import SectionTitle from "@/components/elements/SectionTitle";
import SectionSubTitle from "@/components/elements/SectionSubTitle";
import { useTranslation } from "react-i18next";
import ExternalLink from "@/components/elements/ExternalLink";
import Separator from "@/components/elements/Separator";
import { Faq } from "@/types/faq";

export default function FaqSection({ rows = [] }: { rows: Faq[] }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation("FAQ");

  return (
    <div className="flex-row items-center px-[5%] sm:px-[10%] xl:px-[20%] lg:py-[60px] py-20">
      <SectionTitle title="FAQ" subTitle="" />
      {rows.map((row) => {
        const translation = getTranslation(row, i18n.language);
        return (
          <>
            <SectionSubTitle
              title={translation.question}
              subTitle=""
              className="subTitle"
            />
            <p className="text-alt-black text-lg p-[12px]">
              {translation.answer}
            </p>
            <Separator />
          </>
        );
      })}
      <div className="lg:p-12 py-8 px-6 shadow rounded-lg">
        <div className="mb-5"></div>
        <ExternalLink text={t("ACCESS")} url="https://pyconjp.blogspot.com/" />
      </div>
    </div>
  );
}

const getTranslation = (
  faq: Faq,
  language: string,
): { question: string; answer: string } => {
  if (language.startsWith("en")) {
    return {
      question: faq.question.en || faq.question.ja,
      answer: faq.answer.en || faq.answer.ja,
    };
  } else if (language.startsWith("ja")) {
    return {
      question: faq.question.ja,
      answer: faq.answer.ja,
    };
  }

  return { question: "", answer: "" };
};
