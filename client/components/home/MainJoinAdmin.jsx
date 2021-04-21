import React, { useEffect, useRef } from "react";

const MainJoinAdmin = () => {
  const textRef = useRef();
  const divRef = useRef();

  const adminEvent = () => {
    if (divRef !== null) {
      if (
        Math.round(window.scrollY / 100) * 100 >=
        Math.round((divRef.current.offsetTop - 500) / 100) * 100
      ) {
        textRef.current.style.opacity = "1";
        textRef.current.style.bottom = "13rem";
      }
    }
  };

  const throttle = (fn, delay) => {
    let timer;
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          fn.apply(this, arguments);
        }, delay);
      }
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(adminEvent, 100), {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", throttle(adminEvent, 100), {
        passive: true,
      });
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-screen-2xl h-150 text-9xl flex items-center justify-center"
      ref={divRef}
    >
      <img
        src="/img/reg-or.png"
        alt=""
        className="absolute -top-4 right-0 transform -rotate-12 z-20 shadow-md"
      />
      <img
        src="/img/reg-bk.png"
        alt=""
        className="w-120 absolute top-4 right-24 transform rotate-6 z-10 shadow-md"
      />
      <div className="w-full absolute top-0 left-0 h-120 overflow-hidden shadow-lg">
        <img src="/img/joinadmin.jpg" alt="" className="w-full" />
      </div>
      <div
        className="absolute bottom-0 text-5xl opacity-0 left-20 transition-all duration-700"
        ref={textRef}
      >
        <h1 className="cursor-pointer Montserrat hover:underline">
          JOIN <span className="text-yellow-500">LIKELION</span> as Admin
        </h1>
      </div>
    </div>
  );
};

export default MainJoinAdmin;
