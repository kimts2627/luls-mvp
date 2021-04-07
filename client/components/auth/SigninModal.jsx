import React, { useCallback, useEffect } from "react";
import { handleLoginModal } from "../../reducers/auth";
import { useDispatch } from "react-redux";

const SigninModal = () => {
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
        <button className="relative bg-blue-400 text-white w-1/2 h-12 pl-10 rounded-md outline-none">
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
