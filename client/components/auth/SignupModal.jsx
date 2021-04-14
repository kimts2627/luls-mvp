import React, { useCallback, useEffect, useRef } from "react";
import { handleLoginModal } from "../../reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "qs";
import { handleSignupModal, handleSignupInfo } from "../../reducers/auth";

const SignupModal = () => {
  const router = useRouter();
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
    }
  });

  const handlesSignupInfo = (e) => {
    handlingSignupInfo({
      ...signUpInfo,
      [e.target.getAttribute("name")]: e.target.value,
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
      <section className="relative w-96 bg-white rounded-md flex flex-col justify-evenly items-center">
        <img
          src="/img/x.png"
          alt="back"
          className="w-10 absolute top-0 -mt-24 cursor-pointer"
          onClick={handlingSignupModal}
        />
        <h1 className="text-lg my-10">Need more informations</h1>
        <div className="w-full px-8">
          <h1 className="text-yellow-600 text-lg mb-4">Personal</h1>
          <span>
            <p>Location</p>
            <div className="flex flex-row mb-2">
              <input
                type="text"
                placeholder="City"
                name="City"
                onChange={(e) => handlesSignupInfo(e)}
                className="border-2 border-yellow-500 rounded-md w-24 mr-4 px-1"
              />
              <input
                type="text"
                placeholder="Country"
                name="Country"
                onChange={(e) => handlesSignupInfo(e)}
                className="border-2 border-yellow-500 rounded-md w-24 mr-4 px-1"
              />
              <input
                type="text"
                placeholder="State"
                name="State"
                onChange={(e) => handlesSignupInfo(e)}
                className="border-2 border-yellow-500 rounded-md w-24 px-1"
              />
            </div>
          </span>
          <span>
            <p>Birthday</p>
            <input
              type="date"
              name="Birthday"
              onChange={(e) => handlesSignupInfo(e)}
              className="w-full border-2 border-yellow-500 rounded-md px-2"
            />
          </span>
        </div>
        <div className="w-full px-8">
          <h1 className="text-yellow-600 text-lg my-4">University</h1>
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="University Name"
              name="School_Name"
              onChange={(e) => handlesSignupInfo(e)}
              className="mr-2 w-full border-2 border-yellow-500 rounded-md px-1 mb-2"
            />
            <div className="flex flex-row w-full">
              <input
                type="text"
                placeholder="Major"
                name="Major"
                onChange={(e) => handlesSignupInfo(e)}
                className="border-2 border-yellow-500 rounded-md w-36 px-1 mr-8 mb-4"
              />
              <input
                type="text"
                placeholder="Degree"
                name="Degree"
                onChange={(e) => handlesSignupInfo(e)}
                className="border-2 border-yellow-500 rounded-md px-1 w-36 mb-4"
              />
            </div>
          </div>
          <div className="flex w-full">
            <span className="w-1/2 mr-8">
              <p>Entrance</p>
              <input
                type="date"
                name="Entrance_Year"
                onChange={(e) => handlesSignupInfo(e)}
                className="border-2 border-yellow-500 rounded-md w-36"
              />
            </span>
            <span className="w-1/2">
              <p>Graduation</p>
              <input
                type="date"
                name="Graduation_Year"
                onChange={(e) => handlesSignupInfo(e)}
                className="border-2 border-yellow-500 rounded-md w-36"
              />
            </span>
          </div>
        </div>
        <p ref={errRef} className="text-red-500 text-sm mb-4 mt-2 h-8"></p>
        <button
          className="relative bg-yellow-500 text-white w-1/2 h-12 rounded-md outline-none mb-8"
          onClick={sendSignupRequest}
        >
          SignUp
        </button>
      </section>
    </div>
  );
};

export default SignupModal;
