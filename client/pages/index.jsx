import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/home/Main";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isLoginModalOn = useSelector((state) => state.auth.isLoginModalOn);
  const isSignupModalOn = useSelector((state) => state.auth.isSignupModalOn);

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
