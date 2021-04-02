import React from "react";

const Header = ({ headerSize }) => {
  return (
    <header
      className={`fixed top-0 w-full h-${
        headerSize === "normal" ? "28" : "20"
      } bg-white transition-all z-10 flex justify-center`}
    >
      <div className="w-full max-w-screen-2xl h-full">
        <div
          className={`h-${
            headerSize === "normal" ? "1/3" : "0"
          } bg-red-200 w-full transition-all z-10`}
        ></div>
        <div
          className={`absolute top-0 w-52 bg-red-300 h-full flex justify-center items-center px-${
            headerSize === "normal" ? "4" : "6"
          } transition-all z-20`}
        >
          <img src="/logo.png" alt="likelion" />
        </div>
        <div
          className={`relative bg-red-400 h-${
            headerSize === "normal" ? "2/3" : "full"
          } w-full transition-all z-10 shadow-lg`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
