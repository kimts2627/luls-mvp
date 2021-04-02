import Header from "../components/Header";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React, { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [headerSize, handlingHeaderSize] = useState("normal");
  useEffect(() => {
    if (window) {
      window.addEventListener("mousewheel", (delta) => {
        if (delta.wheelDelta >= 3) {
          handlingHeaderSize("normal");
        } else if (delta.wheelDelta <= -50) {
          handlingHeaderSize("small");
        }
      });
    }
  }, []);

  return (
    <>
      <Header headerSize={headerSize} />
      <Nav headerSize={headerSize} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
