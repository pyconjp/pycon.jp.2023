import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";
import {lives} from "@/data/lives";
import PageTitle from "@/components/elements/PageTitle";
import {LiveDate, LiveOption} from "@/types/lives";
import Select, {PropsValue} from 'react-select';
import {useRouter} from "next/router";

const LiveDetail = ({id}: Props) => {
  const router = useRouter();

  const defaultValue = lives[0].options.find(options => options.value === id)
    || lives[1].options.find(options => options.value === id)
    || lives[0].options[0];

  return (
    <>
      <PageTitle title={'Live'}/>
      <div className='lg:w-8/12 w-10/12 mx-auto flex flex-col gap-6'>
        <iframe className={"rounded-lg w-full aspect-video mx-auto"}
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
        <Select<LiveOption, false, LiveDate> defaultValue={defaultValue} options={lives} className='text-xl'
                                             onChange={(o) => o && router.push(`/live/${o.value}`)}/>
      </div>
    </>
  )
}

type Props = {
  id: string,
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = (async () => {
  const paths = lives.map(day => day.options.map(option => option.value))
    .flat()
    .map(id => ({params: {id,}}));

  return {
    paths,
    fallback: false,
  }
});

export const getStaticProps: GetStaticProps<Props, Params> = (async ({params}) => {
  return {
    props: {
      id: params!.id,
    },
  }
});

export default LiveDetail;