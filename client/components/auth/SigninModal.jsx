import React, { useCallback, useEffect, useRef } from "react";
import { handleLoginModal } from "../../reducers/auth";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "qs";

const SigninModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalRef = useRef();

  const handlingLoginModal = useCallback(() => {
    dispatch(handleLoginModal());
  }, []);

  useEffect(() => {
    if (window) {
      modalRef.current.style.top = `${window.pageYOffset}px`;
    }
  }, []);

  /*
    클라이언트 아이디는 지금처럼 하고
    최초 로그인 하면 서버에 억세스 토큰 보내주고
    클라는 억세스, 리프레쉬 갖고있기.
    ! 억세스는 로컬 스토리지, 리프레쉬는 쿠키에 저장


    만료시 클라에서 구글에 토큰 갱신 후
    억세스토큰 서버에 보내주기. 서버에서 토큰 복사
    ? /login

    자료 요청 시 클라이언트 억세스 토큰과 서버 억세스 토큰 대조 후
    서버에서 구글에 요청 후, 자료 첨삭 후에 클라로 보내주기
    ! 

    로그아웃
    클라 토큰 다 삭제후 서버에 로그아웃 api 요청
    ?
  */

  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

  const queryStr = qs.stringify({
    client_id: GOOGLE_CLIENT_ID,
    access_type: "offline",
    redirect_uri: "https://likelionusa.com",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  });

  const reqAuthorizationToGoogle = async () => {
    const loginUrl = AUTHORIZE_URI + "?" + queryStr;
    router.push(loginUrl);
  };

  return (
    <div
      className="absolute top-0 w-full h-full bg-black z-50 flex items-center justify-center blackback
    "
      ref={modalRef}
    >
      <img
        src="/img/x.png"
        alt="back"
        className="w-10 absolute mb-80 cursor-pointer"
        onClick={handlingLoginModal}
      />
      <section className="w-96 h-48 bg-white rounded-md flex flex-col justify-evenly items-center">
        <h1 className="text-sm">
          Access to <span className="text-yellow-600">@likelion.net</span>{" "}
          acount
        </h1>
        <button
          className="relative bg-blue-400 text-white w-1/2 h-12 pl-10 rounded-md outline-none"
          onClick={reqAuthorizationToGoogle}
        >
          <img
            src="/img/Google.png"
            alt="google"
            className="absolute w-6 left-10"
          />
          Google
        </button>
      </section>
    </div>
  );
};

export default SigninModal;
