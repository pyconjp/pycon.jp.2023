import * as fs from "fs";
import * as path from 'path'
import {Sponsor} from "@/types/sponsor";
import {GetStaticProps} from "next";
import PageTitle from "@/components/elements/PageTitle";
import SponsorList from "@/components/organisms/SponsorList";

export const SponsorPage = ({rows = []}: { rows: Sponsor[] }) => {
  return (
    <>
      <PageTitle title='SPONSOR'/>
      <SponsorList rows={rows}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // JSON ファイルを読み込む
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'sponsor.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const rows = JSON.parse(jsonText) as Sponsor[]

  // ページコンポーネントに渡す props オブジェクトを設定する
  return {props: {rows}}
}

export default SponsorPage;
