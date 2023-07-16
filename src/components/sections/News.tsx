import {Blog} from "@/types/blog";
import Link from "next/link";
import SectionTitle from "@/components/elements/SectionTitle";
import { parseISO, format } from 'date-fns'
import Heading from "@/components/elements/Heading";
import NewsDate from "@/components/elements/NewsDate";
import NewsTitle from "@/components/elements/NewsTitle";

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
                <Link href={blog.url}>
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
    // const {t} = useLocale();

    return (
        <div className='my-4'>
            <SectionTitle title='News'  subTitle='新着情報'/>
            <div>
                <BlogList blogs={blogs}/>
            </div>
        </div>
    )
}
