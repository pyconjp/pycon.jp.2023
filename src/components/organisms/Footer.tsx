import fsPromises from 'fs/promises';
import Link from "next/link";
import { Menu, Menus } from "@/types/menu";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import path from "path";
import pyconApacLogo from "../../../public/footer-2023-logo.png";
// import { ExternalLink } from 'react-external-link';
// import menus from "../../data/menu.json";

type SNS = {
  name: string;
  account: string;
  url: string;
  logo: string;
}

const Footer = ({ menus = [] }: { menus: Menus }) => {
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


  return (
    <footer className="bg-[#111C3B]">
      <div className="p-5">
        <div className="p-5">
          <div className="h-[95px]" style={{ position: "relative" }}>
            <Image
              src={pyconApacLogo}
              alt="Pycon APAC 2023 Logo"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const MenuContents = (menu: Menu) => {
  return (
    <div className="flex-1">
      <p>${menu.title}</p>
      {menu.children.map((child) =>
        <>
          <p>
            <Link href={child.link}>
              {child.title}
            </Link>
          </p>
        </>
      )}
    </div>
  )
}

const SNSContents = (sns: SNS[]) => {
  return (
    <div className="mr-2">
      SNS
    </div>
      {sns.map((s) => <>
      </>
            <div key="sns.name">
              <div class="inline-flex">
                <div class="w-28">
                  <outer-link class="text-secondary-300" :to="sns.url">
                    {{ sns.account }}
                  </outer-link>
                </div>
                <img
                  class="inline w-6 h-6"
                  :src="require(`@/assets/images/sns/${sns.logo}`)"
                  :alt="sns.name"
                />
              </div>
            </div >
            )}

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), './src/data/menu.json');
  const jsonData = await fsPromises.readFile(filePath);
  const menus: Menus[] = JSON.parse(jsonData.toString());

  return {
    props: {
      menus,
    },
  };
};


export default Footer;
