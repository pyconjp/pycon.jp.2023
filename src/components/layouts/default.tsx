import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const Layout = ({children}: { children: JSX.Element }) => {
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