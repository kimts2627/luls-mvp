import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const MyApp = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

const configureStore = (initialState, options) => {};

export default MyApp;
