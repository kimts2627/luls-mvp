import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let state = {
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

const configureStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

// export default withRedux(configureStore)(MyApp);
export default MyApp;
