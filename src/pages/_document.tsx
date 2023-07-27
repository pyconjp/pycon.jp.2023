import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,600;1,600&display=swap"
          rel="stylesheet">
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
