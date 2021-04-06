import Header from "../components/Header";
import "../styles/globals.scss";
// import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React, { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
