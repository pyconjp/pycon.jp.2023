import Link from "next/link";
import { MinusIcon } from "@heroicons/react/20/solid";
import { Menu, menu } from "@/data/menu";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import pyconApacLogo from "../../../public/footer-2023-logo.png";
import { TFunction } from "i18next";

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

  const { t } = useTranslation();

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
          <FooterMenu menus={menu} t={t} />
        </div>
      </div>
    </footer>
  );
};

const FooterMenu = ({ menus, t }: { menus: Menu[]; t: TFunction }) => {
  return (
    <nav className="pt-9">
      <ul className="grid gap-5 w-max mx-auto">
        {menus.map((menu, menuKey) => (
          <li key={menuKey}>
            <div className="grid grid-cols-1 gap-3">
              <h5 className="text-alt-white">
                {t(menu.title, { ns: "PAGES" })}
              </h5>
              <ul className="grid gap-3">
                {menu.children.map((child, childKey) => (
                  <Link
                    href={t(child.url, { ns: "MENU" }) ?? ""}
                    key={childKey}
                  >
                    <li className="flex gap-2.5">
                      <span>
                        <MinusIcon className="h-6 text-primary-800 mx-auto" />
                      </span>
                      <p className="text-tertiary-100">
                        {t(child.title, { ns: "MENU" })}
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
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
