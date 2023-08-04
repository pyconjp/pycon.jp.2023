import Head from "next/head";

type Props = {
  pageTitle?: string;
}

const PageHead = ({pageTitle}: Props) => {
  return (
    <Head>
      <title>PyCon APAC 2023{pageTitle && ' | ' + pageTitle}</title>
      <meta name="description" content="PyCon APAC 2023"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content=""/>
      <meta name="format-detection" content="telephone=no"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://feature-head.pycon-jp-2023.pages.dev/"/>
      <meta property="og:title" content="PyCon APAC 2023"/>
      <meta property="og:description"
            content="PyCon APACは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。"/>
      <meta property="og:image"
            content="https://feature-head.pycon-jp-2023.pages.dev/pyconapac2023_ogp.png"/>
      <meta name="twitter:site" content="@pyconjapan"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image:src" content="https://feature-head.pycon-jp-2023.pages.dev/pyconapac2023_ogp.png"/>
      <link rel="icon" href="/favicon.png"/>
    </Head>
  );
}

export default PageHead;