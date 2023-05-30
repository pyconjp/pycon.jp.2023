import * as fs from "fs";
import { parse } from "csv-parse/sync";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Staff } from "@/types/staff";
import { useTranslation } from "react-i18next";

const StaffCard = ({ name, icon, twitter, github, facebook }: Staff) => (
  <div className={"flex items-center gap-2 flex-col"}>
    <Image
      src={"/staff/" + icon}
      alt={name}
      width={150}
      height={150}
      className={"flex-1"}
    />
    <div className={"flex-1"}>
      <div>name: {name}</div>
      <div>twitter: {twitter}</div>
      <div>github: {github}</div>
      <div>facebook: {facebook}</div>
    </div>
  </div>
);
const StaffPage = ({ rows = [] }: { rows: Staff[] }) => {
  const { t } = useTranslation("PAGES");

  return (
    <>
      <h1 className="text-lg">{t("STAFF")}</h1>
      <h2>スタッフページ（ハードコード文）</h2>
      <div className={"grid lg:grid-cols-3 grid-cols-2 gap-4"}>
        {rows.map((row, index) => (
          <StaffCard
            key={index}
            name={row.name}
            icon={row.icon}
            twitter={row.twitter}
            github={row.github}
            facebook={row.facebook}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const buffer = fs.readFileSync("./src/data/staff.csv");
  const rows: Staff[] = parse(buffer, { delimiter: ",", columns: true });

  return {
    props: {
      rows,
    },
  };
};

export default StaffPage;
