import {useRouter} from "next/router";
import lang from "@/lang/ja";
import en from "@/lang/en";

const useLocale = () => {
  const {locale} = useRouter();
  const t = locale === "ja" ? lang : en;
  return {t};
}

export default useLocale;