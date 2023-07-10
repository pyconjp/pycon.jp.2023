import Link from "next/link";
import { ArrowRightIcon, MinusIcon } from "@heroicons/react/20/solid";
import { Menu, menu } from "@/data/menu";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

import pyconApacLogo from "../../../public/footer-2023-logo.png";
import pyconAssociationLogo from "../../../public/association-logo.svg";

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
    <footer>
      <div className="p-5 bg-[#111C3B]">
        <div className="p-5 flex flex-col gap-9">
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
          <hr className="h-px bg-primary-400 border-0 " />
          <ContactUs snsList={snsData} t={t} />
          <Link
            href="/"
            className="flex w-full h-[32px] border-b-[1px] border-tertiary-100"
          >
            <p className="text-tertiary-100">
              {t("PAST_EVENTS", { ns: "FOOTER" })}
            </p>
            <span>
              <ArrowRightIcon className="h-6 text-tertiary-100 mx-auto" />
            </span>
          </Link>
        </div>
      </div>
      <div className="p-10 flex flex-col gap-10">
        <div className="pyconjp-logo h-[85px]" style={{ position: "relative" }}>
          <Image
            src={pyconAssociationLogo}
            alt="Pycon JP Association Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <p>
          主催: 一般社団法人PyCon JP Association PyCon JP 2022 is a production
          of the PyCon JP Association
        </p>
      </div>
    </footer>
  );
};

const FooterMenu = ({ menus, t }: { menus: Menu[]; t: TFunction }) => {
  return (
    <nav>
      <ul className="grid gap-5 w-max mx-auto">
        {menus.map((menu, menuKey) => (
          <li className="grid grid-cols-1 gap-3" key={menuKey}>
            <h5 className="text-alt-white">{t(menu.title, { ns: "PAGES" })}</h5>
            <ul className="grid gap-3">
              {menu.children.map((child, childKey) => (
                <Link href={t(child.url, { ns: "MENU" }) ?? ""} key={childKey}>
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ContactUs = ({ snsList, t }: { snsList: SNS[]; t: TFunction }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-white text-sm">Follow Us!</p>
      </div>
      <div>
        <p className="text-white text-sm">
          {t("CONTACT_US", { ns: "FOOTER" })}
        </p>
      </div>
      <div>
        <p className="text-white text-sm">{t("READ_FAQ", { ns: "FOOTER" })}</p>
      </div>
    </div>
  );
};

export default Footer;
