import useLocale from "@/components/hooks/locale";

const TimeTable = () => {
  const {t} = useLocale();

  return (
    <>
      <h1 className='text-lg'>{t.PAGES.TIMETABLE}</h1>
    </>
  )
}

export default TimeTable;
