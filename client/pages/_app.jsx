import "../styles/globals.scss";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";
import cookieCutter from "cookie-cutter";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSignupModal,
  handleLogin,
  handleUserInfo,
  setAlert,
} from "../reducers/auth";
import SigninModal from "../components/auth/SigninModal";
import SignupModal from "../components/auth/SignupModal";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  let authCode;

  const isSignupModalOn = useSelector((state) => state.auth.isSignupModalOn);
  const isLoginModalOn = useSelector((state) => state.auth.isLoginModalOn);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userInfo = useSelector((state) => state.auth.userInfo);

  const handlingSignupModal = useCallback(() => {
    dispatch(handleSignupModal());
  }, []);

  const handlingLogin = useCallback(() => {
    dispatch(handleLogin());
  }, []);

  const handlingUserInfo = useCallback((userInfo) => {
    dispatch(handleUserInfo(userInfo));
  }, []);

  const settingAlert = useCallback((status) => {
    dispatch(setAlert(status));
  }, []);

  const getToken = async () => {
    const query = {
      code: decodeURIComponent(authCode),
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
      // router.push("/");
      window.localStorage.clear();
      //! Set access token at localstorage
      window.localStorage.setItem("token", data.access_token);
      //! Set refresh token at cookie
      cookieCutter.set("refresh", data.refresh_token);
      //! Login Request to server!!!
      if (window.localStorage.getItem("token")) {
        const token = window.localStorage.getItem("token");
        console.log(token);
        loginReqToServer();
      }
      return;
    } else {
      throw new Error("login failed");
    }
  };

  const handleAlert = () => {
    if (window.state.idx !== 0) {
      settingAlert("login");
      setTimeout(() => {
        settingAlert(null);
      }, 4000);
    }
  };

  const loginReqToServer = () => {
    let token = window.localStorage.getItem("token");
    axios
      .get("https://www.likelionustest.com/users/login", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        handlingLogin();
        handlingUserInfo(res.data);
        handleAlert();
      })
      .catch((err) => {
        if (!isSignupModalOn) {
          console.log(err);
          //! Open Signup Modal !!!
          if (err.response.data.message === "Login Failed") {
            handlingSignupModal();
          } else if (err.response.data === "저희 유저가 아닙니다.") {
            window.localStorage.clear();
            // Needs to remove refresh token cookie
            return alert('Please login to "@likelion.net" or "@google.com"');
          }
        }
      });
  };

  useEffect(() => {
    if (router.asPath.slice(0, 6) === "/?code") {
      authCode = `${router.asPath.slice(7, router.asPath.indexOf("&"))}`;
      getToken();
      router.push("/");
    }
  }, []);

  //! Login stablizer
  useEffect(() => {
    if (window.localStorage.getItem("token") && !isAuth) {
      loginReqToServer();
      console.log("login stablized");
    }
  });

  useEffect(() => {
    if (isLoginModalOn || isSignupModalOn) {
      document.querySelector("body").style.overflow = "hidden";
    } else if (!isLoginModalOn && !isSignupModalOn) {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [isLoginModalOn, isSignupModalOn]);

  return (
    <>
      <Component {...pageProps} />
      {isLoginModalOn ? <SigninModal /> : null}
      {isSignupModalOn ? <SignupModal /> : null}
    </>
  );
};

const makeStore = (context) => createStore(reducer, composeWithDevTools());
const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper.withRedux(MyApp);
