import useLocale from "@/components/hooks/locale";

const StaffPage = () => {
  const { t } = useLocale();

  return (
    <>
      <h1 className='text-lg'>{t.PAGES.STAFF}</h1>
      <h2>スタッフページ（ハードコード文）</h2>
    </>
  )
}

export default StaffPage;
