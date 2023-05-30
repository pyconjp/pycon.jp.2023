import {useTranslation} from "react-i18next";

const Sponsor = () => {
  const {t} = useTranslation("PAGES")

  return (
    <>
      <h1 className='text-lg'>{t("SPONSOR")}</h1>
    </>
  )
}

export default Sponsor;
