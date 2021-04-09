import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/home/Main";
import { useSelector } from "react-redux";
import SigninModal from "../components/auth/SigninModal";
import axios from "axios";

const Home = ({ data }) => {
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
        <Main message={data.message} />
      </div>
      {!token && isLoginModalOn ? <SigninModal /> : null}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await axios.get("https://www.likelionustest.com/users/test");
  let data = await res.data;
  console.log(data);

  if (res.status !== "200") {
    data = { message: "server is closed" };
  }
  return {
    props: {
      data,
    },
  };
}

// Home.getInitialProps = async () => {
//   const res = await axios.get("https://api.manana.kr/address/korea.json");
//   const data = res.data;
//   console.log("a", data);
//   return { data: data[1] };
// };

export default Home;
