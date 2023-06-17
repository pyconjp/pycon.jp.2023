import TextCard from "@/components/organisms/TextCard";
import Heading from "@/components/elements/Heading";
import SectionTitle from "@/components/elements/SectionTitle";
import React from "react";
import ExternalLink from "@/components/elements/ExternalLink";

export default function GoodsSection() {
  return (
    <div className='lg:m-[60px] my-20 mx-4'>
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
    </div>
  )
}
