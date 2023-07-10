import Link from "next/link";
import { Menu, menu } from "@/data/menu";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import path from "path";
import pyconApacLogo from "../../../public/footer-2023-logo.png";
import { TFunction } from "i18next";
// import { ExternalLink } from 'react-external-link';
// import menus from "../../data/menu.json";

type SNS = {
  name: string;
  account: string;
  url: string;
  logo: string;
};

const Footer = () => {
  const snsData = [
    {
      name: "twitter",
      account: "@pyconjapan",
      url: "https://twitter.com/pyconjapan",
      logo: "twitter_w.svg",
    },
    {
      name: "facebook",
      account: "@PyConJP",
      url: "https://www.facebook.com/PyConJP/",
      logo: "facebook_w.svg",
    },
  ];

  const { t } = useTranslation("PAGES");

  return (
    <footer className="bg-[#111C3B]">
      <div className="p-5">
        <div className="p-5">
          <div className="logo h-[95px]" style={{ position: "relative" }}>
            <Image
              src={pyconApacLogo}
              alt="Pycon APAC 2023 Logo"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div>{menu.map((v, k) => MenuContents(v, k, t))}</div>
        </div>
      </div>
    </footer>
  );
};

const MenuContents = (menu: Menu, key: number, t: TFunction) => {
  return (
    <div className="flex-1" key={key}>
      <p>{t(menu.title)}</p>
      {/*menu.children.map((child) => (
        <>
          <p>
            <Link href={child.link}>{child.title}</Link>
          </p>
        </>
      ))*/}
    </div>
  );
};

// const SNSContents = (sns: SNS[]) => {
//   return (
//     <div className="mr-2">
//       SNS
//     </div>
//       {sns.map((s) => <>
//       </>
//             <div key="sns.name">
//               <div class="inline-flex">
//                 <div class="w-28">
//                   <outer-link class="text-secondary-300" :to="sns.url">
//                     {{ sns.account }}
//                   </outer-link>
//                 </div>
//                 <img
//                   class="inline w-6 h-6"
//                   :src="require(`@/assets/images/sns/${sns.logo}`)"
//                   :alt="sns.name"
//                 />
//               </div>
//             </div >
//             )}
//
//   )
// }

export default Footer;
