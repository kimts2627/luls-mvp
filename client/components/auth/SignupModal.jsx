import React, { useCallback, useEffect, useRef } from "react";
import { handleLoginModal } from "../../reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "qs";
import { handleSignupModal, handleSignupInfo } from "../../reducers/auth";

const SignupModal = () => {
  const router = useRouter();
  const noScroll = () => {
    window.scrollTo(0, 0);
  };

  const errRef = useRef();

  const dispatch = useDispatch();
  const signUpInfo = useSelector((state) => state.auth.signUpInfo);

  const handlingSignupModal = useCallback(() => {
    dispatch(handleSignupModal());
  }, []);

  const handlingSignupInfo = useCallback((info) => {
    dispatch(handleSignupInfo(info));
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", noScroll);
    }
    return () => window.removeEventListener("scroll", noScroll);
  });

  const handlesSignupInfo = (event) => {
    console.log({ [event.target.getAttribute("name")]: event.target.value });
    handlingSignupInfo({
      ...signUpInfo,
      [event.target.getAttribute("name")]: event.target.value,
    });
  };

  const sendSignupRequest = () => {
    for (let i in signUpInfo) {
      if (!signUpInfo[i]) {
        errRef.current.textContent = "모든 항목을 작성 해 주세요!";
        throw new Error("모든항목 작성 요망");
      }
    }
    console.log(signUpInfo);
    // axios.
  };

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
        <div>
          Personal
          <span>
            <p>Location</p>
            <input
              type="text"
              placeholder="City"
              name="City"
              onChange={(e) => handlesSignupInfo(e)}
            />
            <input
              type="text"
              placeholder="Country"
              name="Country"
              onChange={(e) => handlesSignupInfo(e)}
            />
            <input
              type="text"
              placeholder="State"
              name="State"
              onChange={(e) => handlesSignupInfo(e)}
            />
          </span>
          <span>
            <p>Birthday</p>
            <input
              type="date"
              name="Birthday"
              onChange={(e) => handlesSignupInfo(e)}
            />
          </span>
        </div>
        <div>
          University
          <input
            type="text"
            placeholder="University Name"
            name="School_Name"
            onChange={(e) => handlesSignupInfo(e)}
          />
          <input
            type="text"
            placeholder="Major"
            name="Major"
            onChange={(e) => handlesSignupInfo(e)}
          />
          <input
            type="text"
            placeholder="Degree"
            name="Degree"
            onChange={(e) => handlesSignupInfo(e)}
          />
          <span>
            <p>Entrance</p>
            <input
              type="date"
              name="Entrance_Year"
              onChange={(e) => handlesSignupInfo(e)}
            />
          </span>
          <span>
            <p>Graduation</p>
            <input
              type="date"
              name="Graduation_Year"
              onChange={(e) => handlesSignupInfo(e)}
            />
          </span>
        </div>
        <p ref={errRef} className="text-red-500 text-10">
          test
        </p>
        <button
          className="relative bg-yellow-500 text-white w-1/2 h-12 rounded-md outline-none"
          onClick={sendSignupRequest}
        >
          SignUp
        </button>
      </section>
    </div>
  );
};

export default SignupModal;
