import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const router = useRouter();
  //* header의 크기를 결정하는 headerSize state, 해당 상태를 통해 실제 header와 부속들의 크기를 핸들링 함수
  const [headerSize, handlingHeaderSize] = useState("normal");

  const isLoginModalOn = useSelector((state) => state.auth.isLoginModalOn);

  //* mouseWheel 동작에 따라 headerSize state의 상태를 결정함
  //! unmout시 eventlistener 해제

  if (router.pathname === "/") {
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
      return () =>
        window.removeEventListener("mousewheel", (delta) => {
          if (delta.wheelDelta >= 10) {
            handlingHeaderSize("normal");
          } else if (delta.wheelDelta <= -50) {
            handlingHeaderSize("small");
          }
        });
    }, []);
  }
  return (
    <div className="font-Lato">
      <Header headerSize={headerSize} />
      <Nav headerSize={headerSize} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
