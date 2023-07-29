import SectionTitle from "@/components/elements/SectionTitle";
import React from "react";
import Heading from "@/components/elements/Heading";
import TextCard from "@/components/organisms/TextCard";
import SectionSubTitle from "@/components/elements/SectionSubTitle";
import {useTranslation} from "react-i18next";
import Markdown from "@/components/elements/Markdown";

export default function ConferenceSection() {
  const { t} = useTranslation("CONFERENCE");

    return (
        <div className='my-20'>
          <SectionTitle title='Conference' subTitle='カンファレンス'/>
          <SectionSubTitle title={'Keynote'} subTitle={'基調講演'} className='subTitle'/>
          <TextCard image={{src: '/lorena_for_twitter.jpg', alt: t('SPEAKER_EN.IMG_ALT'), width: 300, height: 368}}>
            <Heading>
              {t('SPEAKER_EN.NAME')}
            </Heading>
            <Markdown content={t('SPEAKER_EN.BIO')} components={{Heading}}/>
          </TextCard>
          <TextCard image={{src: '/kita-photo-2020-07-07-trim.jpg', alt: t('SPEAKER_JP.IMG_ALT'), width: 300, height: 368}}>
            <Heading>
              {t('SPEAKER_JP.NAME')}
            </Heading>
            <Markdown content={t('SPEAKER_JP.BIO')} components={{Heading}}/>
          </TextCard>
        </div>
    )
}
