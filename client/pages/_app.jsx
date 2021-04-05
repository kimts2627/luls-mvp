import Header from "../components/Header";
// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React, { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  //* header의 크기를 결정하는 headerSize state, 해당 상태를 통해 실제 header와 부속들의 크기를 핸들링 함
  const [headerSize, handlingHeaderSize] = useState("normal");

  //* mouseWheel 동작에 따라 headerSize state의 상태를 결정함
  useEffect(() => {
    if (window) {
      window.addEventListener("mousewheel", (delta) => {
        if (delta.wheelDelta >= 10) {
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
