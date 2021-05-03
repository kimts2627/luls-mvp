import React, { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLoginModal,
  handleLogout,
  handleUserInfo,
  setAlert,
} from "../../reducers/auth";
import AuthModal from "../auth/AuthModal";
import axios from "axios";

const Header = ({ headerSize }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const authAlert = useSelector((state) => state.auth.authAlert);

  const handlingLoginModal = useCallback(() => {
    dispatch(handleLoginModal());
  });

  const handlingLogout = useCallback(() => {
    dispatch(handleLogout());
  });

  const handlingUserInfo = useCallback((userInfo) => {
    dispatch(handleUserInfo(userInfo));
  });

  const settingAlert = useCallback((status) => {
    dispatch(setAlert(status));
  });

  //! 로그아웃시 알림창 생성 함수
  const handleAlert = () => {
    settingAlert("logout");
    setTimeout(() => {
      settingAlert(null);
    }, 4000);
  };

  //! 브라우저에 남아있는 정보 말소 후, 로그인처리
  const signOut = () => {
    if (router.pathname !== "/") {
      router.push("/");
    }
    handlingLogout();
    handlingUserInfo({});
    window.localStorage.clear();
    handleAlert();
  };

  //! 서버에서 구글OAuth 페이지로 리다이렉트 시키는 방법 테스트용 함수
  const testFunc = () => {
    axios
      .get("https://likelionustest.com/users/login1", { withCredentials: true })
      .then((res) => {
        console.log(res);
        router.push(res.data);
      });
  };

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
      <AuthModal status={authAlert} />
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
            <Link href="/admins/attendences">
              <a className="cursor-pointer">Admin</a>
            </Link>
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
          <ul className="w-44 text-right h-full flex items-center justify-between text-lg font-bold">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/tasks/posts?page=1">
              <a>Tasks</a>
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
