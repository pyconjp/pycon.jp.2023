import {useTranslation} from "react-i18next";

const TimeTable = () => {
  const {t} = useTranslation("PAGES");

  return (
    <>
      <h1 className='text-lg'>{t("TIMETABLE")}</h1>
    </>
  )
}

export default TimeTable;
