import React, { useRef, useEffect } from "react";

const MainJoinStudent = () => {
  const textRef = useRef();
  const divRef = useRef();

  const studentEvent = () => {
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
    window.addEventListener("scroll", throttle(studentEvent, 100), {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", throttle(studentEvent, 100), {
        passive: true,
      });
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-screen-2xl h-150 mt-60 mb-44 flex items-center justify-center"
      ref={divRef}
    >
      <img
        src="/img/triangle-bk.png"
        alt=""
        className="absolute -top-40 left-56 w-80 transform -rotate-12 z-20"
      />
      <img
        src="/img/donut-or.png"
        alt=""
        className="w-120 absolute -top-12 -left-10 transform rotate-6 z-10"
      />
      <div className="w-full absolute top-0 left-0 h-120 overflow-hidden shadow-lg">
        <img src="/img/joinstudent.jpg" alt="" className="w-full -mt-32" />
      </div>
      <div
        className="absolute bottom-0 text-5xl opacity-0 right-20 transition-all duration-700"
        ref={textRef}
      >
        <h1 className="cursor-pointer Montserrat hover:underline">
          JOIN <span className="text-yellow-500">LIKELION</span> as Member
        </h1>
      </div>
    </div>
  );
};

export default MainJoinStudent;
