import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/home/Main";
import { useSelector } from "react-redux";
import SigninModal from "../components/auth/SigninModal";
import axios from "axios";

export default function Home({ res }) {
  useEffect(() => {
    console.log(res);
    console.log(axios.get("https://www.likelionustest.com/users/test"));
  }, []);
  const token = useSelector((state) => state.auth.token);
  const isLoginModalOn = useSelector((state) => state.auth.isLoginModalOn);
  return (
    <Layout>
      <Head>
        <title>We are LikeLion US</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mt-40 flex items-center flex-col">
        <Main message={res} />
      </div>
      {!token && isLoginModalOn ? <SigninModal /> : null}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://www.likelionustest.com/users/test");

  return {
    props: {
      res,
    },
  };
}
