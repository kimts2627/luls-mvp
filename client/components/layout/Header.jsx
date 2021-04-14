import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLoginModal,
  handleLogout,
  handleUserInfo,
} from "../../reducers/auth";

const Header = ({ headerSize }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const handlingLoginModal = useCallback(() => {
    dispatch(handleLoginModal());
  });

  const handlingLogout = useCallback(() => {
    dispatch(handleLogout());
  });

  const handlingUserInfo = useCallback((userInfo) => {
    dispatch(handleUserInfo(userInfo));
  });

  const signOut = () => {
    handlingLogout();
    handlingUserInfo(null);
    window.localStorage.clear();
    //! 쿠키 삭제 요망
    return alert("Logout Success!");
  };

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
          } bg-white w-full transition-all z-40 flex flex-row-reverse pr-6`}
        >
          <ul className="w-96 text-right h-full flex items-center justify-between underline">
            <a className="cursor-pointer">Admin</a>
            <a className="cursor-pointer">Student</a>
            <a className="cursor-pointer">Alumni</a>
            <a className="cursor-pointer">B-Platform</a>
            {isAuth ? (
              <a className="cursor-pointer text-yellow-600" onClick={signOut}>
                Signout
              </a>
            ) : (
              <a
                className="cursor-pointer text-yellow-600"
                onClick={handlingLoginModal}
              >
                SignIn
              </a>
            )}
          </ul>
        </div>
        <div
          className={`absolute top-0 w-52 bg-white h-full flex justify-center items-center px-${
            router.pathname !== "/"
              ? "h-4"
              : headerSize === "normal"
              ? "h-4"
              : "h-6"
          } transition-all z-50 ml-6`}
        >
          <Link href="/">
            <img
              src="/img/logo.png"
              alt="likelion"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div
          className={`relative bg-white ${
            router.pathname !== "/"
              ? "h-2/3"
              : headerSize === "normal"
              ? "h-2/3"
              : "h-full"
          } w-full transition-all z-40 flex flex-row-reverse pr-6`}
        >
          <ul className="w-32 text-right h-full flex items-center justify-between text-lg font-bold">
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
