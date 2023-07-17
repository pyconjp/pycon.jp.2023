import React from "react";
import TextCard from "@/components/organisms/TextCard";
import Heading from "@/components/elements/Heading";
import SectionTitle from "@/components/elements/SectionTitle";
import ExternalLink from "@/components/elements/ExternalLink";
import {useTranslation} from "react-i18next";
import Markdown from "@/components/elements/Markdown";

const GoodsSection = () => {
  const {t} = useTranslation("SAMPLE");
  // TODO サンプルなので後で消す
  return (
    <div className='my-20'>
      <SectionTitle title='Goods' subTitle='グッズ'/>
      <TextCard image={{src: '/dummy.png', alt: '商品画像', width: 400, height: 300}}>
        <article className='prose prose-h1:font-montserrat prose-h1:italic'>
          <Markdown content={t('MD_TEXT')} components={{Heading}}/>
        </article>
        <ExternalLink text='外部リンク' url={'https://example.com'}/>
      </TextCard>
    </div>
  )
}

export default GoodsSection;
