import {Blog} from "@/types/blog";
import Link from "next/link";
import SectionTitle from "@/components/elements/SectionTitle";
import {parseISO, format} from 'date-fns'
import NewsDate from "@/components/elements/NewsDate";
import NewsTitle from "@/components/elements/NewsTitle";
import {useTranslation} from "react-i18next";
import ExternalLink from "@/components/elements/ExternalLink";
import Announce from "@/components/elements/Announce";

type Props = {
  blogs: Blog[]
}

function parseDate(dateString: string) {
  const date = parseISO(dateString);
  return format(date, 'yyyy.MM.dd');
}

const Blog = ({blog}: { blog: Blog }) => {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-4'>
      <NewsDate>
        {parseDate(blog.published)}
      </NewsDate>
      <NewsTitle>
        <Link href={blog.url} target="_blank">
          {blog.title}
        </Link>
      </NewsTitle>
    </div>
  )
}

const BlogList = ({blogs}: { blogs: Blog[] }) => {
  return (
    <div className='flex lg:gap-1.5 gap-3 flex-col'>
      {blogs.map((blog, index) => <Blog key={index} blog={blog}/>)}
    </div>
  )
}

export default function NewsSection({blogs}: Props) {
  const {t} = useTranslation("BLOG");

  return (
    <div className="flex-row items-center px-[5%] sm:px-[10%] xl:px-[20%] lg:py-[60px] py-20">
      <SectionTitle title='News' subTitle='新着情報'/>
      <Announce/>
      <div className='lg:p-12 py-8 px-6 shadow rounded-lg'>
        <div className='mb-5'>
          <BlogList blogs={blogs}/>
        </div>
        <ExternalLink text={t("ACCESS")} url="https://pyconjp.blogspot.com/"/>
      </div>
    </div>
  )
}
