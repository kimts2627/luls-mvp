import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/home/Main";
import { useSelector } from "react-redux";
import SigninModal from "../components/auth/SigninModal";
import axios from "axios";
import fetch from "node-fetch";

export default function Home({ data }) {
  console.log(data);
  const token = useSelector((state) => state.auth.token);
  const isLoginModalOn = useSelector((state) => state.auth.isLoginModalOn);
  return (
    <Layout>
      <Head>
        <title>We are LikeLion US</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mt-40 flex items-center flex-col">
        <Main />
      </div>
      {!token && isLoginModalOn ? <SigninModal /> : null}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.manana.kr/address/korea.json");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
