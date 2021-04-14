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
      class="absolute w-1/3 rounded-md -top-14 bg-green-100 p-4 z-50 transition-all duration-500"
      ref={barRef}
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="h-5 w-5 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-green-800">
            {authAlert === "login"
              ? "Successfully logged in"
              : authAlert === "logout"
              ? "Successfully logged out"
              : "Successfully logged in"}
          </p>
        </div>
        <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button
              type="button"
              class="inline-flex bg-green-100 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
              onClick={exitAlert}
            >
              <span class="sr-only">Dismiss</span>
              <svg
                class="h-5 w-5"
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
