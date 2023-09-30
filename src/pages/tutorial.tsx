import PageHead from "@/components/elements/PageHead";
import PageTitle from "@/components/elements/PageTitle";
import {Talk} from "@/types/timetable";
import {
  fetchTalks, getTalk, sortTalks,
  SUBMISSION_TYPE_TUTORIAL
} from "@/utils/pretalx";
import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";
import TutorialLayout from "@/components/organisms/TutorialLayout";
import TalkContent from "@/components/elements/TalkContent";
import {TicketIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";
import {useTransition} from "react";
import {useTranslation} from "react-i18next";


type Props = {
  tutorials: Talk[],
}

const Tutorial = ({tutorials}: Props) => {
  const {t} = useTranslation('TUTORIAL');

  const router = useRouter();
  const transition = async (url: string) => {
    await router.push(url);
  }

  return (
    <>
      <PageHead/>
      <PageTitle title='Tutorial'/>
      <TutorialLayout tutorials={tutorials}>
        <div className='p-6 border-alt-black bg-secondary-50'>
          <h1 className='text-2xl'>{t('INDEX')}</h1>

          <div className='my-6'>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
            <div>この文章はサンプルです。</div>
          </div>

          <div
            className='bg-primary-500 text-alt-white p-4 flex items-center text-lg gap-4 rounded-2xl cursor-pointer hover:bg-primary-600'
            onClick={() => transition('https://example.com')}>
            <TicketIcon className='w-6 h-6'/>チケットの購入はこちら
          </div>
        </div>
      </TutorialLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = (async ({params}) => {
  const tutorials = (await fetchTalks(SUBMISSION_TYPE_TUTORIAL)).sort(sortTalks);

  return {
    props: {
      tutorials,
    },
  }
});

export default Tutorial;