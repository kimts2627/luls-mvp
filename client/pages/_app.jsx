import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const MyApp = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

const configureStore = (initialState, options) => {
  const store = createStore(reducer, initialState, composeWithDevTools());
  return store;
};

export default withRedux(configureStore)(MyApp);
