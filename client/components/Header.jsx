import React from "react";

const Header = ({ headerSize }) => {
  return (
    <header
      className={`fixed top-0 w-full h-${
        headerSize === "normal" ? "28" : "20"
      } bg-white transition-all z-10 flex justify-center shadow-lg`}
    >
      <div className="w-full max-w-screen-2xl h-full">
        <div
          className={`h-${
            headerSize === "normal" ? "1/3" : "0"
          } bg-white w-full transition-all z-10 flex flex-row-reverse`}
        >
          <div className="w-1/3 text-right h-full flex items-center justify-evenly">
            <a className="cursor-pointer">Admin</a>
            <a className="cursor-pointer">Student</a>
            <a className="cursor-pointer">Alumni</a>
            <a className="cursor-pointer">B-platform</a>
          </div>
        </div>
        <div
          className={`absolute top-0 w-52 bg-white h-full flex justify-center items-center px-${
            headerSize === "normal" ? "4" : "6"
          } transition-all z-20`}
        >
          <img src="/logo.png" alt="likelion" />
        </div>
        <div
          className={`relative bg-white h-${
            headerSize === "normal" ? "2/3" : "full"
          } w-full transition-all z-10`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
