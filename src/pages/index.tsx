import Head from "next/head";
import HeroSection from "@/components/sections/Hero";
import NewsSection from "@/components/sections/News";
import OverviewSection from "@/components/sections/Overview";
import ConferenceSection from "@/components/sections/Conference";
import FaqSection from "@/components/sections/Faq";
import SponsorsSection from "@/components/sections/Sponsors";
import { Blog } from "@/types/blog";
import { GetStaticProps } from "next";

type Props = {
  blogs: Blog[];
};

export default function Home({ blogs = [] }: Props) {
  return (
    <>
      <Head>
        <title>PyCon APAC 2023</title>
        <meta name="description" content="PyCon APAC 2023"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <HeroSection/>
      <NewsSection blogs={blogs}/>
      <OverviewSection/>
      <ConferenceSection/>
      <FaqSection/>
      <SponsorsSection/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogBaseUrl =
    "https://www.googleapis.com/blogger/v3/blogs/1711203921350230994/posts";
  const blogUrl = `${blogBaseUrl}?key=${process.env.BLOGGER_API_KEY}`;
  const blogResponse = await fetch(blogUrl);
  const { items } = await blogResponse.json();
  const blogs: Blog[] = items.slice(5).map((
    { url, title, published }: Blog,
  ) => ({
    url,
    title,
    published,
  }));

  return {
    props: {
      blogs,
    },
  };
};
