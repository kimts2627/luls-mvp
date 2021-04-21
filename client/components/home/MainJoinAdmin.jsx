import React, { useEffect, useRef } from "react";

const MainJoinAdmin = () => {
  const textRef = useRef();
  const divRef = useRef();
  const descRef = useRef();

  const adminEvent = () => {
    if (divRef !== null) {
      if (
        Math.round(window.scrollY / 100) * 100 >=
        Math.round((divRef.current.offsetTop - 500) / 100) * 100
      ) {
        textRef.current.style.opacity = "1";
        textRef.current.style.bottom = "13rem";
        setTimeout(() => {
          descRef.current.style.opacity = "1";
          descRef.current.style.bottom = "4rem";
        }, 500);
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

  //*######################################################

  const orRegRef = useRef();
  const bkRegRef = useRef();
  let orDeg = -12;
  let bkDeg = 6;

  const rotateProps = (e) => {
    if (e.wheelDelta >= 0) {
      orDeg = orDeg - 1;
      bkDeg = bkDeg + 1;
    } else {
      orDeg = orDeg + 1;
      bkDeg = bkDeg - 1;
    }
    orRegRef.current.style.transform = `rotate(${orDeg}deg)`;
    bkRegRef.current.style.transform = `rotate(${bkDeg}deg)`;
  };

  useEffect(() => {
    window.addEventListener("mousewheel", throttle(rotateProps, 100), {
      passive: true,
    });
    return () => {
      window.removeEventListener("mousewheel", throttle(rotateProps, 100), {
        passive: true,
      });
    };
  }, []);

  //*######################################################

  return (
    <div
      className="relative w-full max-w-screen-2xl h-150 flex items-center justify-center"
      ref={divRef}
    >
      <img
        src="/img/reg-or.png"
        alt=""
        className="absolute -top-4 right-0 transform -rotate-12 z-20 shadow-md transition-all duration-75"
        ref={orRegRef}
      />
      <img
        src="/img/reg-bk.png"
        alt=""
        className="w-120 absolute top-4 right-24 transform rotate-6 z-10 shadow-md transition-all duration-75"
        ref={bkRegRef}
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
      <p
        className="absolute w-120 right-20 -bottom-24 opacity-0 text-center text-xl transition-all duration-1000"
        ref={descRef}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo odio,
        egestas nec massa sit amet, tincidunt tempor massa. Proin rutrum congue
        nulla non pulvinar. Aliquam tempor varius laoreet.
      </p>
    </div>
  );
};

export default MainJoinAdmin;
