import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/Main";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>We are LikeLion US</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mt-40 flex items-center flex-col">
        <Main />
      </div>
    </Layout>
  );
}
