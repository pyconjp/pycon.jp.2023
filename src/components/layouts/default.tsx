import Footer from "@/components/organisms/Footer";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Montserrat_Alternates } from 'next/font/google';

const montserrat_alternates = Montserrat_Alternates({
  weight: ['600'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-montserrat_alternates',
});

const Layout = ({children}: { children: JSX.Element }) => {
  const Header = dynamic(
    () => import('@/components/organisms/Header'),
    {
      loading: () =>
        <header>
          <nav>
            <ul className="flex flex-row w-10/12 justify-between mx-auto items-center">
              <Image
                src={"/logo.png"}
                alt={"PyCon APAC 2023"}
                width={260}
                height={90}
              />
            </ul>
          </nav>
        </header>
    }
  );

  return (
    <>
      <Header/>
      <main className={`${montserrat_alternates.variable}`}>
        <div className={'mx-auto w-10/12 pt-12 pb-8'}>
          {children}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Layout;