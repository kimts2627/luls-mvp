import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

const Notice = () => {
  return (
    <Layout>
      <Head>
        <title>We are LikeLion US</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center">
        <div className="mt-28 bg-pink-100 h-screen w-full max-w-screen-xl">
          hello world
        </div>
      </div>
    </Layout>
  );
};

export default Notice;
