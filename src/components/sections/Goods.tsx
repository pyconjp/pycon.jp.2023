import React from "react";
import TextCard from "@/components/organisms/TextCard";
import Heading from "@/components/elements/Heading";
import SectionTitle from "@/components/elements/SectionTitle";
import ExternalLink from "@/components/elements/ExternalLink";
import SectionSubTitle from "@/components/elements/SectionSubTitle";

export default function GoodsSection() {
  return (
    <div className='my-20'>
      <SectionTitle title='Goods' subTitle='グッズ'/>
      <TextCard image={{src: '/dummy.png', alt: '商品画像', width: 400, height: 300}}>
        <Heading>
          Goods
        </Heading>
        <p>
          グッズに関する説明文が入ります。Suzuriで販売しているよーとか配布するよーとか詳細が決まったら入れよう。
        </p>
        <p>
          グッズに関する説明文が入ります。Suzuriで販売しているよーとか配布するよーとか詳細が決まったら入れよう。
        </p>
        <p>
          グッズに関する説明文が入ります。Suzuriで販売しているよーとか配布するよーとか詳細が決まったら入れよう。
        </p>
        <ExternalLink text='外部リンク' url={'https://example.com'}/>
      </TextCard>
      <SectionSubTitle title={'SubTitle'} subTitle={'サブタイトル'} className='subTitle'/>
      <SectionSubTitle title={'SubTitle'} subTitle={'サブタイトル'} className='subTitle' hasSeparator={true}/>
      <SectionSubTitle title={'SubTitle'} subTitle={'サブタイトル'} className='subTitle' hasSeparator={true}/>
    </div>
  )
}
