import Link from "next/link";
import {ArrowRightIcon, MinusIcon} from "@heroicons/react/20/solid";
import {Menu, menu} from "@/data/menu";
import Image, {ImageProps} from "next/image";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

import pyconApacLogo from "../../../public/footer-2023-logo.png";
import pyconAssociationLogo from "../../../public/association-logo.svg";
import bgImage from "../../../public/section_bgimg_map.png";
import ExternalLink from "@/components/elements/ExternalLink";

type SNS = {
  name: string;
  account: string;
  url: string;
  logo: ImageProps;
};

const Footer = () => {
  const snsData: SNS[] = [
    {
      name: "twitter",
      account: "@pyconjapan",
      url: "https://twitter.com/pyconjapan",
      logo: {
        src: "/twitter_w.svg",
        height: 24,
        width: 20,
        alt: "twitter logo",
      },
    },
    {
      name: "facebook",
      account: "@PyConJP",
      url: "https://www.facebook.com/PyConJP/",
      logo: {
        src: "/facebook_w.svg",
        height: 24,
        width: 24,
        alt: "facebook logo",
      },
    },
  ];

  const {t} = useTranslation();

  return (
    <footer className="absolute w-screen h-fit">
      <div
        className="p-10 lg:py-6 lg:px-32 bg-[#111C3B] overflow-hidden bg-[url('/section_bgimg_map.png')] bg-[length:438px_508px] bg-no-repeat bg-center">
        <div className="flex flex-col gap-9">
          <div className="lg:py-5">
            <Image
              src={pyconApacLogo}
              className="mx-auto lg:mx-0"
              alt="Pycon APAC 2023 Logo"
              width={282}
              height={91.3}
            />
          </div>
          <FooterMenu menus={menu} t={t}/>
          <hr className="h-px bg-primary-400 border-0 "/>
          <ContactUs snsList={snsData} t={t}/>
          <div className="flex w-full h-[32px] lg:justify-end">
            <a
              href="https://www.pycon.jp/organizer/index.html"
              rel='noopener noreferrer'
              target='_blank'
              className="flex w-full border-b-[1px] lg:max-w-[240px] border-tertiary-100 lg:"
            >
              <p className="text-tertiary-100">
                {t("PAST_EVENTS", {ns: "FOOTER"})}
              </p>
              <span>
                <ArrowRightIcon className="h-6 text-tertiary-100 mx-auto"/>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex p-10 lg:px-0 lg:py-12 bg-white justify-center">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 lg:max-w-[653px]">
          <Image
            src={pyconAssociationLogo}
            alt="Pycon JP Association Logo"
            height={143}
            width={85}
          />
          <p>
            主催: 一般社団法人PyCon JP Association PyCon JP 2022 is a production
            of the PyCon JP Association
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterMenu = ({menus, t}: { menus: Menu[]; t: TFunction }) => {
  return (
    <nav>
      <ul className="grid lg:grid-cols-5 gap-5 w-max mx-auto lg:mx-0">
        {menus.map((menu, menuKey) => (
          <li className="grid grid-cols-1 gap-3 lg:auto-rows-max" key={menuKey}>
            <h5 className="text-alt-white">{t(menu.title, {ns: "PAGES"})}</h5>
            <ul className="grid gap-3">
              {menu.children.map((child, childKey) => (
                <Link href={t(child.url, {ns: "MENU"}) ?? ""} key={childKey}>
                  <li className="flex gap-2.5">
                    <span>
                      <MinusIcon className="h-6 text-primary-800 mx-auto"/>
                    </span>
                    <p className="text-tertiary-100">
                      {t(child.title, {ns: "MENU"})}
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

const ContactUs = ({snsList, t}: { snsList: SNS[]; t: TFunction }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[429.146px]">
      <div className="flex gap-5">
        <p className="text-white text-sm w-fit">Follow Us!</p>
        <div>
          {snsList.map((sns, key) => (
            <a
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              key={key}
            >
              <div className="grid grid-cols-2 gap-2">
                <p className="text-tertiary-100">{sns.account}</p>
                <Image {...sns.logo} alt={sns.name}/>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="text-white text-sm">
          {t("CONTACT_US", {ns: "FOOTER"})}
          <a
            href="mailto: pyconjp@pycon.jp"
            className="text-tertiary-100 ml-2  "
          >
            pyconjp@pycon.jp
          </a>
        </p>
      </div>
      <div>
        <p className="text-white text-sm">{t("READ_FAQ", {ns: "FOOTER"})}</p>
      </div>
    </div>
  );
};

export default Footer;
