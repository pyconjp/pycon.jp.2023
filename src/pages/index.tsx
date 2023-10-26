import * as fs from "fs";
import * as path from "path";
import HeroSection from "@/components/sections/Hero";
import NewsSection from "@/components/sections/News";
import OverviewSection from "@/components/sections/Overview";
import ConferenceSection from "@/components/sections/Conference";
import FaqSection from "@/components/sections/Faq";
import SponsorsSection from "@/components/sections/Sponsors";
import SupportSection from "@/components/sections/Support";
import { Blog } from "@/types/blog";
import { GetStaticProps } from "next";
import { Sponsor } from "@/types/sponsor";
import { Faq } from "@/types/faq";

type Props = {
  blogs: Blog[];
  sponsor_rows: Sponsor[];
  faq_rows: Faq[];
};

export default function Home({
  blogs = [],
  sponsor_rows = [],
  faq_rows = [],
}: Props) {
  return (
    <>
      <HeroSection />
      <NewsSection blogs={blogs} />
      <OverviewSection />
      <SupportSection />
      <ConferenceSection />
      <FaqSection rows={faq_rows} />
      <SponsorsSection rows={sponsor_rows} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogBaseUrl =
    "https://www.googleapis.com/blogger/v3/blogs/1711203921350230994/posts";
  const blogUrl = `${blogBaseUrl}?key=${process.env.BLOGGER_API_KEY}`;
  const blogResponse = await fetch(blogUrl);
  const { items } = await blogResponse.json();
  const blogs: Blog[] = items
    .reverse()
    .slice(5)
    .reverse()
    .map(({ url, title, published }: Blog) => ({
      url,
      title,
      published,
    }));
  const sponsorJsonPath = path.join(
    process.cwd(),
    "src",
    "data",
    "sponsor.json",
  );
  const sponsorJsonText = fs.readFileSync(sponsorJsonPath, "utf-8");
  const sponsor_rows = JSON.parse(sponsorJsonText) as Sponsor[];
  const faqJsonPath = path.join(process.cwd(), "src", "data", "faq.json");
  const faqJsonText = fs.readFileSync(faqJsonPath, "utf-8");
  const faq_rows = JSON.parse(faqJsonText) as Faq[];

  return {
    props: {
      blogs,
      sponsor_rows,
      faq_rows,
    },
  };
};

async function getBlogPosts() {
  if (!process.env.BLOGGER_API_KEY) {
    return [];
  }
  const blogBaseUrl =
    "https://www.googleapis.com/blogger/v3/blogs/1711203921350230994/posts";
  const blogUrl = `${blogBaseUrl}?key=${process.env.BLOGGER_API_KEY}`;
  const blogResponse = await fetch(blogUrl);
  const { items } = await blogResponse.json();
  return items.slice(5).map(({ url, title, published }: Blog) => ({
    url,
    title,
    published,
  })) as Blog[];
}
