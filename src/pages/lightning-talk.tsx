import {
  fetchAnswers,
  fetchTalks,
  sortTalks, SUBMISSION_TYPE_LT,
} from "@/utils/pretalx";
import {Answer, Talk} from "@/types/timetable";
import PageTitle from "@/components/elements/PageTitle";
import SectionSubTitle from "@/components/elements/SectionSubTitle";
import {useTranslation} from "react-i18next";

const DATE_THRESHOLD = '2023-10-28T00:00:00+09:00';

type Props = {
  day1: Talk[],
  day2: Talk[],
}

const LightningTalk = ({day1, day2}: Props) => {
  const {t} = useTranslation('LIGHTNING_TALK');

  return (
    <>
      <PageTitle title='Lightning Talk'/>
      <div className='w-10/12 mx-auto flex flex-col gap-20'>
        <LightningTalks talks={day1} title={'Day1'} subTitle={t('DAY1')}/>
        <LightningTalks talks={day2} title={'Day2'} subTitle={t('DAY2')}/>
      </div>
    </>
  )
}


const LightningTalks = ({talks, title, subTitle}: { talks: Talk[], title: string, subTitle: string }) => {
  return <div>
    <SectionSubTitle title={title} subTitle={subTitle}/>
    <div className='flex gap-10 flex-col'>{talks.map(talk => <TalkCard key={talk.code} talk={talk}/>)}</div>
  </div>
}

const TalkCard = ({talk}: { talk: Talk }) => {
  return <div>
    <h3 className='text-lg font-bold mb-1 text-primary-600'>{talk.title}</h3>
    <div className='font-bold mb-2 text-secondary-600'>{talk.speakers.map(speaker => speaker.name).join(' / ')}</div>
    <div className='text-alt-black bg-secondary-100 rounded p-6'>{talk.abstract}</div>
  </div>
}

export const getStaticProps = async () => {
  const answers = await fetchAnswers();
  const contentLocales = answers.reduce(
    (acc: { [p: string]: string }, cur: Answer) => ({...acc, [cur.submission]: cur.answer}), {}
  );

  const lt = await fetchTalks(SUBMISSION_TYPE_LT)
    .then(sessions => sessions.map(session => {
      session.content_locale = ['日本語', 'Japanese'].includes(contentLocales[session.code]) ? 'ja-jp' : 'en';
      return session;
    }));

  const day1 = lt.filter(session => session.slot.start < DATE_THRESHOLD).sort(sortTalks);
  const day2 = lt.filter(session => session.slot.start > DATE_THRESHOLD).sort(sortTalks);

  return {
    props: {day1, day2,},
  }
}

export default LightningTalk;