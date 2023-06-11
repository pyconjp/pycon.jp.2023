import Footer from "@/components/organisms/Footer";
import dynamic from "next/dynamic";

const Layout = ({children}: { children: JSX.Element }) => {
  const Header = dynamic(
    () => import('@/components/organisms/Header'), {ssr: false}
  );

  return (
    <>
      <Header/>
      <main>
        <div className={'mx-auto w-10/12 pt-12 pb-8'}>
          {children}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Layout;