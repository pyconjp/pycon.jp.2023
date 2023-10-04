import * as fs from "fs";
import * as path from 'path'
import HeroSection from "@/components/sections/Hero";
import NewsSection from "@/components/sections/News";
import OverviewSection from "@/components/sections/Overview";
import ConferenceSection from "@/components/sections/Conference";
import FaqSection from "@/components/sections/Faq";
import SponsorsSection from "@/components/sections/Sponsors";
import {Blog} from "@/types/blog";
import {GetStaticProps} from "next";
import {Sponsor} from "@/types/sponsor";

type Props = {
  blogs: Blog[];
  sponsor_rows: Sponsor[];
};

export default function Home({blogs = [], sponsor_rows = []}: Props) {
  return (
    <>
      <HeroSection/>
      <NewsSection blogs={blogs}/>
      <OverviewSection/>
      <ConferenceSection/>
      <FaqSection/>
      <SponsorsSection rows={sponsor_rows}/>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogBaseUrl =
    "https://www.googleapis.com/blogger/v3/blogs/1711203921350230994/posts";
  const blogUrl = `${blogBaseUrl}?key=${process.env.BLOGGER_API_KEY}`;
  const blogResponse = await fetch(blogUrl);
  const {items} = await blogResponse.json();
  const blogs: Blog[] = items.reverse().slice(5).reverse().map((
    {url, title, published}: Blog,
  ) => ({
    url,
    title,
    published,
  }));
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'sponsor.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const sponsor_rows = JSON.parse(jsonText) as Sponsor[]

  return {
    props: {
      blogs, sponsor_rows
    },
  };
};

async function getBlogPosts() {
  if (!process.env.BLOGGER_API_KEY) {
    return []
  }
  const blogBaseUrl =
    "https://www.googleapis.com/blogger/v3/blogs/1711203921350230994/posts";
  const blogUrl = `${blogBaseUrl}?key=${process.env.BLOGGER_API_KEY}`;
  const blogResponse = await fetch(blogUrl);
  const { items } = await blogResponse.json();
  return items.slice(5).map((
    { url, title, published }: Blog,
  ) => ({
    url,
    title,
    published,
  })) as Blog[];
}