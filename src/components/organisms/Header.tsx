import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("PAGES");

  return (
    <>
      <header className="sticky h-[90px] top-0">
        <nav>
          <ul className="flex flex-row w-10/12 justify-between mx-auto items-center">
            <Link href="/">
              <Image
                src={"/logo.png"}
                alt={"PyCon APAC 2023"}
                width={260}
                height={90}
              />
            </Link>
            <li>
              <Link href="/timetable">{t("TIMETABLE")}</Link>
            </li>
            <li>
              <Link href="/">{t("SPONSOR")}</Link>
            </li>
            <li>
              <Link href="/staff">{t("STAFF")}</Link>
            </li>
            <div className="flex flex-row">
              <div className="mx-2">
                {i18n.language.startsWith("ja") ? (
                  <span className="text-gray-500">JA</span>
                ) : (
                  <button
                    className="text-blue-500"
                    onClick={() => i18n.changeLanguage("ja")}
                  >
                    JA
                  </button>
                )}
              </div>
              /
              <div className="mx-2">
                {i18n.language.startsWith("en") ? (
                  <span className="text-gray-500">EN</span>
                ) : (
                  <button
                    className="text-blue-500"
                    onClick={() => i18n.changeLanguage("en")}
                  >
                    EN
                  </button>
                )}
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
