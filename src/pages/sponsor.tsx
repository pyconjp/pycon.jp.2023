import useLocale from "@/components/hooks/locale";

const Sponsor = () => {
  const {t} = useLocale();

  return (
    <>
      <h1 className='text-lg'>{t.PAGES.SPONSOR}</h1>
    </>
  )
}

export default Sponsor;
