import "../styles/globals.scss";
import React, { useState, useEffect, useCallback } from "react";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";
import cookieCutter from "cookie-cutter";
import { useDispatch, useSelector } from "react-redux";
// import { handleAuth } from "../reducers/auth";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // const [authCode, handleAuthCode] = useState("a");

  // const isAuth = useSelector((state) => state.auth.isAuth);

  let authCode;

  // const handlingAuth = dispatch(handleAuth());

  const getToken = async () => {
    const query = {
      code: authCode,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      grant_type: "authorization_code",
    };

    let res = await axios.post(
      `https://accounts.google.com/o/oauth2/token?${qs.stringify(query)}`,
      {
        withCredentials: true,
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    let data = await res.data;

    if (data) {
      console.log("Sucess");
      //! redirect to main page & delete Authorization code
      router.push("/");
      window.localStorage.clear();
      //! Set access token at localstorage
      window.localStorage.setItem("token", data.access_token);
      //! Set refresh token at cookie
      cookieCutter.set("refresh", data.refresh_token);
      console.log("login success");
      return;
    } else {
      throw new Error("login failed");
    }
  };

  useEffect(() => {
    if (router.asPath.slice(0, 6) === "/?code") {
      authCode = `${router.asPath.slice(7, router.asPath.indexOf("&"))}`;
      getToken();
    }
  });

  useEffect(() => {
    //* login stablizer
    if (window.localStorage.getItem("token")) {
      console.log("token 있다");
      //! Set isAuth state to true
      // handlingAuth();
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
