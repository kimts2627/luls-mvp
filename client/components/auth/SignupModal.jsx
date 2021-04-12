import React, { useCallback, useEffect } from "react";
import { handleLoginModal } from "../../reducers/auth";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "qs";

const SignupModal = () => {
  const router = useRouter();
  const noScroll = () => {
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();

  const handlingSignupModal = useCallback(() => {
    dispatch(handleSignupModal());
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", noScroll);
    }
    return () => window.removeEventListener("scroll", noScroll);
  });

  return (
    <div className="absolute top-0 w-full h-full bg-black z-50 flex items-center justify-center blackback">
      <img
        src="/img/x.png"
        alt="back"
        className="w-10 absolute mb-80 cursor-pointer"
        onClick={handlingSignupModal}
      />
      <section className="w-96 bg-white rounded-md flex flex-col justify-evenly items-center">
        <h1 className="text-sm">
          Access to <span className="text-yellow-600">@likelion.net</span>{" "}
          acount
        </h1>
        <input type="text" placeholder="School Name" />
        <button
          className="relative bg-yellow-600 text-white w-1/2 h-12 pl-10 rounded-md outline-none"
          onClick={reqAuthorizationToGoogle}
        >
          SignUp
        </button>
      </section>
    </div>
  );
};

export default SignupModal;
