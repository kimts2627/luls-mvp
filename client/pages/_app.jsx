import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
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
