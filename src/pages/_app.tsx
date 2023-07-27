import "@/styles/globals.css";
import "@/utils/i18n";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/default";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
