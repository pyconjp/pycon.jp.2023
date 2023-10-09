import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import {Talk} from "@/types/timetable";
import {
  fetchTalks, sortTalks,
  SUBMISSION_TYPE_TUTORIAL
} from "@/utils/pretalx";
import {GetStaticProps} from "next";
import TutorialLayout from "@/components/organisms/TutorialLayout";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import Heading from "@/components/elements/Heading";
import Markdown from "@/components/elements/Markdown";
import React from "react";


type Props = {
  tutorials: Talk[],
}

const Tutorial = ({tutorials}: Props) => {
  const {t} = useTranslation('TUTORIAL');

  const Link= ({href, children}: { href: string, children: React.ReactNode }) => (
    <a href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
  )

  return (
    <>
      <PageHead/>
      <PageTitle title='Tutorial'/>
      <TutorialLayout tutorials={tutorials}>
        <div className='p-6 border-alt-black bg-secondary-50'>
          <Heading>{t('INDEX')}</Heading>
          <div className='mt-4 prose-a:text-primary-500 prose-a:font-bold prose-a:underline prose-p:mt-2'>
            <Markdown content={t('DESCRIPTION')} components={{ArrowTopRightOnSquareIcon, Link}}/>
          </div>
        </div>
      </TutorialLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = (async () => {
  const tutorials = (await fetchTalks(SUBMISSION_TYPE_TUTORIAL)).sort(sortTalks);

  return {
    props: {
      tutorials,
    },
  }
});

export default Tutorial;