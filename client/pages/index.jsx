import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Main from "../components/home/Main";
import { useDispatch, useSelector } from "react-redux";
import SigninModal from "../components/auth/SigninModal";
import axios from "axios";
import SignupModal from "../components/auth/SignupModal";
import { handleSignupModal } from "../reducers/auth";

const Home = ({ data }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isLoginModalOn = useSelector((state) => state.auth.isLoginModalOn);
  const isSignupModalOn = useSelector((state) => state.auth.isSignupModalOn);

  const handlingSignupModal = useCallback(() => {
    dispatch(handleSignupModal());
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      //! login request to server
      const token = window.localStorage.getItem("token");
      console.log(token);
      axios
        .get("https://www.likelionustest.com/users/login", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(console.log)
        .catch((err) => {
          console.log(err.response);
          if (err.response.data.message === "Login Failed") {
            handlingSignupModal();
          }
        });
    }
  });

  return (
    <Layout>
      <Head>
        <title>We are LikeLion US</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mt-40 flex items-center flex-col">
        <Main message={data.message} />
      </div>
      {isLoginModalOn ? <SigninModal /> : null}
      {isSignupModalOn ? <SignupModal /> : null}
      {/* <SignupModal /> */}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await axios.get("https://www.likelionustest.com/users/test");
  let data = await res.data;
  console.log(data);

  if (!data.message) {
    data = { message: "hello world" };
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
