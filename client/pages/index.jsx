import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/home/Main";
import SigninModal from "../components/auth/SigninModal";

export default function Home({ isLogin }) {
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
