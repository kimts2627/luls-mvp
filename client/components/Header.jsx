import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ headerSize }) => {
  const router = useRouter();
  return (
    <header
      className={`fixed top-0 w-full h-${
        router.pathname === "/QA" ? "28" : headerSize === "normal" ? "28" : "20"
      } bg-white transition-all z-10 flex justify-center shadow-md`}
    >
      <div className="w-full max-w-screen-2xl h-full">
        <div
          className={`h-${
            router.pathname === "/QA"
              ? "1/3"
              : headerSize === "normal"
              ? "1/3"
              : "0"
          } bg-white w-full transition-all z-10 flex flex-row-reverse`}
        >
          <ul className="w-1/3 text-right h-full flex items-center justify-evenly underline">
            <a className="cursor-pointer">Admin</a>
            <a className="cursor-pointer">Student</a>
            <a className="cursor-pointer">Alumni</a>
            <a className="cursor-pointer">B-platform</a>
          </ul>
        </div>
        <div
          className={`absolute top-0 w-52 bg-white h-full flex justify-center items-center px-${
            router.pathname === "/QA"
              ? "4"
              : headerSize === "normal"
              ? "4"
              : "6"
          } transition-all z-20`}
        >
          <img src="/logo.png" alt="likelion" />
        </div>
        <div
          className={`relative bg-white h-${
            router.pathname === "/QA"
              ? "2/3"
              : headerSize === "normal"
              ? "2/3"
              : "full"
          } w-full transition-all z-10 flex flex-row-reverse`}
        >
          <ul className="w-1/5 text-right h-full flex items-center justify-evenly text-lg font-bold">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/QA">
              <a>Q/A</a>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
