import {Blog} from "@/types/blog";
import Link from "next/link";
import SectionTitle from "@/components/elements/SectionTitle";
import { parseISO, format } from 'date-fns'
import Heading from "@/components/elements/Heading";
import NewsDate from "@/components/elements/NewsDate";
import NewsTitle from "@/components/elements/NewsTitle";
import useLocale from "@/components/hooks/locale";
import { useTranslation } from "react-i18next";

type Props = {
    blogs: Blog[]
}

function parseDate(dateString:string){
    const date = parseISO(dateString);
    return format(date, 'yyyy.MM.dd');
}

const Blog = ({blog}: { blog: Blog }) => {
    return (
        <div>
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
        <div>
            {blogs.map((blog, index) => <Blog key={index} blog={blog}/>)}
        </div>
    )
}

export default function NewsSection({blogs}: Props) {
     const {t} = useTranslation("BLOG");

    return (
        <div className="flex-row items-center px-[5%] sm:px-[10%] xl:px-[20%] my-[36px]">
            <SectionTitle title='News'  subTitle='新着情報'/>
            <div>
                <BlogList blogs={blogs}/>
            </div>
            <div className="pr-8 text-lg font-bold text-right underline lg:text-right text-primary-700 pb-14">
                <Link href="https://pyconjp.blogspot.com/" target="_blank">
                    {t("ACCESS")}
                </Link>
            </div>
        </div>
    )
}
