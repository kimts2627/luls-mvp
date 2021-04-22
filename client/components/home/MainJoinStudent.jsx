import React, { useRef, useEffect } from "react";

const MainJoinStudent = () => {
  const textRef = useRef();
  const divRef = useRef();
  const descRef = useRef();

  const studentEvent = () => {
    if (divRef.current !== null) {
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

  useEffect(() => {
    window.addEventListener("scroll", studentEvent, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", studentEvent, {
        passive: true,
      });
    };
  }, []);

  //*######################################################

  const bkRegRef = useRef();
  let bkDeg = 6;

  const rotateProps = (e) => {
    if (bkRegRef.current !== null) {
      if (e.wheelDelta >= 0) {
        bkDeg = bkDeg + 1;
      } else {
        bkDeg = bkDeg - 1;
      }
      bkRegRef.current.style.transform = `rotate(${bkDeg}deg)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousewheel", rotateProps, {
      passive: true,
    });
    return () => {
      window.removeEventListener("mousewheel", rotateProps, {
        passive: true,
      });
    };
  }, []);

  //*######################################################

  return (
    <div
      className="relative w-full max-w-screen-2xl h-150 mt-60 mb-44 flex items-center justify-center student"
      ref={divRef}
    >
      <img
        src="/img/triangle-bk.png"
        alt=""
        className="absolute -top-40 left-56 w-80 transform -rotate-12 z-20 transition-all duration-75"
        ref={bkRegRef}
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
      <p
        className="absolute w-120 left-20 -bottom-24 opacity-0 text-center text-xl transition-all duration-1000"
        ref={descRef}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo odio,
        egestas nec massa sit amet, tincidunt tempor massa. Proin rutrum congue
        nulla non pulvinar. Aliquam tempor varius laoreet.
      </p>
    </div>
  );
};

export default MainJoinStudent;
