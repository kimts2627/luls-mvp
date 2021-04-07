import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SigninModal from "../auth/SigninModal";

const Header = ({ headerSize }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(headerSize);
  }, [headerSize]);
  return (
    <header
      className={`fixed top-0 w-full ${
        router.pathname !== "/"
          ? "h-28"
          : headerSize === "normal"
          ? "h-28"
          : "h-20"
      } bg-white transition-all z-40 flex justify-center shadow-md`}
    >
      <div className="w-full max-w-screen-2xl h-full">
        <div
          className={`${
            router.pathname !== "/"
              ? "h-1/3"
              : headerSize === "normal"
              ? "h-1/3"
              : "h-0"
          } bg-white w-full transition-all z-40 flex flex-row-reverse`}
        >
          <ul className="w-1/3 text-right h-full flex items-center justify-evenly underline">
            <a className="cursor-pointer">Admin</a>
            <a className="cursor-pointer">Student</a>
            <a className="cursor-pointer">Alumni</a>
            <a className="cursor-pointer">B-Platform</a>
            <a className="cursor-pointer text-yellow-600">SignIn</a>
          </ul>
        </div>
        <div
          className={`absolute top-0 w-52 bg-white h-full flex justify-center items-center px-${
            router.pathname !== "/"
              ? "h-4"
              : headerSize === "normal"
              ? "h-4"
              : "h-6"
          } transition-all z-50`}
        >
          <img src="/img/logo.png" alt="likelion" />
        </div>
        <div
          className={`relative bg-white ${
            router.pathname !== "/"
              ? "h-2/3"
              : headerSize === "normal"
              ? "h-2/3"
              : "h-full"
          } w-full transition-all z-40 flex flex-row-reverse`}
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
