import fsPromises from 'fs/promises';
import Link from "next/link";
import { Menu, Menus } from "@/types/menu";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import path from "path";
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
      name: 'twitter',
      account: '@pyconjapan',
      url: 'https://twitter.com/pyconjapan',
      logo: 'twitter_w.svg',
    },
    {
      name: 'facebook',
      account: '@PyConJP',
      url: 'https://www.facebook.com/PyConJP/',
      logo: 'facebook_w.svg',
    },
  ]


  return (
    <footer className="bg-gray-800 text-white text-center py-4 bottom-0">
      <div className="relative text-white font-noto">
        <div
          className="relative bg-center bg-no-repeat pt-7 pb-7 bg-tertiary-900 bg-footer lg:bg-right-bottom"
        >
          <div className="w-11/12 mx-auto lg:w-10/12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="footer-2023-logo.png"
              alt="2023-logo"
              className="mx-auto lg:ml-0 w-72"
            />
            <div
              className="flex flex-col w-1/2 gap-4 mx-auto footer-menu lg:flex-row lg:w-full lg:ml-0 lg:gap-0"
            >
              {menus.map((menu) => MenuContents(menu))}
            </div>
          </div>
          {/*
        <div
        className="flex flex-row gap-2 pt-6 mb-3 border-t-2 border-t-tertiary-400 lg:pt-9 font-source"
        >
          <div className="mr-2">
            {{ $t('common.sns') }}
          </div>
          <div className="flex flex-col gap-2">
            <div v-for="sns in getSns" :key="sns.name">
              <div className="inline-flex">
                <div className="w-28">
                  <outer-link className="text-secondary-300" :to="sns.url">
                    {{ sns.account }}
                  </outer-link>
                </div>
                <img
                  className="inline w-6 h-6"
                  :src="require(`@/assets/images/sns/${sns.logo}`)"
                  :alt="sns.name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-end lg:flex-row">
          <div className="flex-1 mb-8 lg:mb-1.5">
            <div className="inline-flex mb-3">
              <div className="mr-2">{{ $t('common.contact.contact') }}：</div>
              <div>
                <outer-link
                  to="mailto:pyconjp@pycon.jp"
                  className="text-secondary-300"
                >
                  pyconjp@pycon.jp
                </outer-link>
              </div>
            </div>
            <p className="">{{ $t('common.contact.description') }}</p>
          </div>
        </div>
        <div
          className="mb-6 text-center underline lg:mt-7 mt-9 previous-pages lg:text-right text-secondary-300"
        >
          <outer-link to="https://www.pycon.jp/organizer/index.html">
            {{ $t('common.pastPyConJPSites') }}
          </outer-link>
        </div>
      </div>
    </div>
*/}
          <div className="text-black bg-white">
            <div className="flex justify-center">
              <div
                className="flex flex-col pt-8 pb-3 lg:py-10 lg:flex-row lg:items-start"
              >
                <div className="flex-auto mb-2 lg:mb-0 lg:mr-2">
                  <a
                    href="https://www.pycon.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-20 mx-auto lg:mr-0 lg:ml-auto"
                      src="@/assets/images/association-logo.svg"
                      alt="association-logo"
                    />
                  </a>
                </div>
                <div className="flex-row justify-center pl-8 pr-8 lg:ml-2 lg:p-0">
                  <p className="lg:mt-2">主催：一般社団法人PyCon JP Association</p>
                  <p className="lg:mt-2">
                    PyCon JP 2022 is a production of the PyCon JP Association
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

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