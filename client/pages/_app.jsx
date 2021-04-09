import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const [authCode, handleAuthCode] = useState(null);

  const getToken = async () => {
    handleAuthCode(`${router.asPath.slice(2)}`);
    console.log(authCode);

    let query = {
      code: authCode,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      redirect_uri: "https://likelionusa.com",
      grant_type: "authorization_code",
    };

    let res = await axios.post(
      // https://accounts.google.com/o/oauth2/auth/
      // https://acounts.google.com/o/oauth2/token/
      `https://accounts.google.com/o/oauth2/auth/?${qs.stringify(query)}`,
      {
        withCredentials: true,
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    let data = res.data;
    window.localStorage.setItem('token', data);
    console.log(window.localStorage.getItem('token'));
  };

  useEffect(() => {
    console.log(router);
    if(router.asPath.slice(0,6) === '/?code') {
      console.log('구글이다')
      getToken();
      router.push('/');
      console.log("query delete");
    }
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

// const configureStore = (initialState, options) => {
//   const store = createStore(reducer, initialState, composeWithDevTools());
//   return store;
// };

const makeStore = (context) => createStore(reducer, composeWithDevTools());
const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper.withRedux(MyApp);
