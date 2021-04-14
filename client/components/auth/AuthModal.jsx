import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const AuthModal = () => {
  const barRef = useRef();

  const authAlert = useSelector((state) => state.auth.authAlert);

  useEffect(() => {
    if (authAlert === null) {
      barRef.current.style.top = "-4rem";
    }
    if (authAlert === "login" || authAlert === "logout") {
      barRef.current.style.top = "1.5rem";
    }
  }, [authAlert]);

  const exitAlert = () => {
    barRef.current.style.top = "-4rem";
  };

  return (
    <div
      className="absolute w-1/3 rounded-md -top-14 bg-yellow-100 p-4 z-50 transition-all duration-500"
      ref={barRef}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            src="/img/lion.png"
            alt="lion"
            className="absolute w-8 left-5 top-3"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-yellow-800 ml-10">
            {authAlert === "login"
              ? "Successfully logged in"
              : authAlert === "logout"
              ? "Successfully logged out"
              : "Successfully logged in"}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-yellow-100 rounded-md p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-600"
              onClick={exitAlert}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
