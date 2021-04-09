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

  const [AuthCode, handleAuthCode] = useState(null);

  useEffect(() => {
    console.log(router.asPath);
    const getToken = async () => {
      if (router.query.code && router.query.scope) {
        handleAuthCode(`${router.query.code.slice(2)}${router.query.scope}`);

        let query = {
          code: AuthCode,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
          redirect_uri: "https://likelionusa.com",
          grant_type: "authorization_code",
        };

        let res = await axios.post(
          `https://acounts.google.com/o/oauth2/token?${qs.stringify(query)}`,
          {
            withCredentials: true,
            header: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );

        let data = res.data;

        console.log(data);
      }
    };
    getToken();
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
