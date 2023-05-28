import useLocale from "@/components/hooks/locale";
import {Blog} from "@/types/blog";
import Link from "next/link";

type Props = {
    blogs: Blog[]
}

const Blog = ({blog}: { blog: Blog }) => {
    return (
        <div>
            <span className='me-4'>
                {blog.published}
            </span>
            <Link href={blog.url}>
                {blog.title}
            </Link>
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
    const {t} = useLocale();

    return (
        <div className='my-4'>
            <h1>
                NEWS
            </h1>
            <div>
                TODO News
                <BlogList blogs={blogs}/>
            </div>
        </div>
    )
}
