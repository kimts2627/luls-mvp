import React, { useCallback, useEffect } from "react";
import { handleLoginModal } from "../../reducers/auth";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "qs";
import { route } from "next/dist/next-server/server/router";

const SigninModal = () => {
  const router = useRouter();
  const noScroll = () => {
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();

  const handlingLoginModal = useCallback(() => {
    dispatch(handleLoginModal());
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", noScroll);
    }
    return () => window.removeEventListener("scroll", noScroll);
  });

  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

  const queryStr = qs.stringify({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: "https://likelionusa.com",
    response_type: "token",
    scope: "profile",
  });

  const reqAuthorizationToGoogle = async () => {
    const loginUrl = AUTHORIZE_URI + "?" + queryStr;
    router.push(loginUrl);
  };

  return (
    <div className="absolute top-0 w-full h-full bg-black z-50 flex items-center justify-center blackback">
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
