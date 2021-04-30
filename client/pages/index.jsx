import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/home/Main";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>We are LikeLion US</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mt-40 flex items-center flex-col back transition-all duration-500">
        <Main />
      </div>
    </Layout>
  );
};

export default Home;
