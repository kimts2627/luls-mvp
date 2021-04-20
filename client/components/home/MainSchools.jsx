import React, { useEffect, useRef } from "react";
import Link from "next/link";

const MainSchools = () => {
  const divRef = useRef();

  const schoolFocusEvent = () => {
    const back = document.querySelector(".back");
    if (
      Math.round(window.scrollY / 100) * 100 >=
      Math.round(divRef.current.offsetTop / 100) * 100
    ) {
      back.style.backgroundColor = "rgb(0, 0, 0)";
    } else if (
      Math.round(window.scrollY / 100) * 100 <
      Math.round(divRef.current.offsetTop / 100) * 100
    ) {
      back.style.backgroundColor = "rgb(255, 255, 255)";
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
    window.addEventListener("scroll", throttle(schoolFocusEvent, 100), {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", throttle(schoolFocusEvent, 100), {
        passive: true,
      });
    };
  }, []);

  const backRef = useRef();

  const showBackground = (e) => {
    backRef.current.style.opacity = "0.6";
    e.currentTarget.style.transform = "scale(1.1)";
    let src = e.currentTarget.children[0].src;
    console.log(src.slice(31, src.length - 4));
    backRef.current.src = `/img/${src.slice(31, src.length - 4)}-campus.jpeg`;
  };

  const hideBackground = (e) => {
    e.currentTarget.style.transform = "scale(1.0)";
    backRef.current.style.opacity = "0";
  };

  return (
    <div
      className="bg-black w-full max-w-screen-2xl h-staticFull text-9xl flex flex-col items-center justify-center text-white"
      ref={divRef}
    >
      <h1 className="text-3xl mt-96">
        <span className="text-yellow-500">LIKELION</span> nisi ut aliquip 6x ea
        commodo consequat. Lorem ipsum dolor sit amet
      </h1>
      <p className="text-2xl mt-10 mb-44">
        quis nostrud exercitation ullamco laboris
      </p>
      <section className="w-full h-120 flex justify-between items-center overflow-hidden">
        <div className="w-full max-w-screen-2xl h-96 absolute z-0 overflow-hidden flex items-center">
          <img
            src=""
            alt=""
            ref={backRef}
            className="w-full transition-all duration-300"
          />
        </div>
        <div className="flex justify-evenly items-center w-full z-10">
          <Link href="/univ/ucla">
            <div
              className="w-44 cursor-pointer transition-all duration-200"
              onMouseOver={(e) => showBackground(e)}
              onMouseOut={(e) => hideBackground(e)}
            >
              <img src="/img/logo/ucla.png" alt="" className="w-full" />
            </div>
          </Link>
          <Link href="/univ/brown">
            <div
              className="w-28 cursor-pointer transition-all duration-200"
              onMouseOver={(e) => showBackground(e)}
              onMouseOut={(e) => hideBackground(e)}
            >
              <img src="/img/logo/brown.png" alt="" className="w-full" />
            </div>
          </Link>
          <Link href="/univ/berkeley">
            <div
              className="w-44 cursor-pointer transition-all duration-200"
              onMouseOver={(e) => showBackground(e)}
              onMouseOut={(e) => hideBackground(e)}
            >
              <img src="/img/logo/berkeley.png" alt="" className="w-full" />
            </div>
          </Link>
          <Link href="/univ/ucla">
            <div
              className="w-44 cursor-pointer transition-all duration-200"
              onMouseOver={(e) => showBackground(e)}
              onMouseOut={(e) => hideBackground(e)}
            >
              <img src="/img/logo/ucla.png" alt="" className="w-full" />
            </div>
          </Link>
          <Link href="/univ/brown">
            <div
              className="w-28 cursor-pointer transition-all duration-200"
              onMouseOver={(e) => showBackground(e)}
              onMouseOut={(e) => hideBackground(e)}
            >
              <img src="/img/logo/brown.png" alt="" className="w-full" />
            </div>
          </Link>
          <Link href="/univ/berkeley">
            <div
              className="w-44 cursor-pointer transition-all duration-200"
              onMouseOver={(e) => showBackground(e)}
              onMouseOut={(e) => hideBackground(e)}
            >
              <img src="/img/logo/berkeley.png" alt="" className="w-full" />
            </div>
          </Link>
        </div>
      </section>
      <h3 className="text-2xl text-yellow-400 animate-blink">
        Check out Likelions each universities
      </h3>
    </div>
  );
};

export default MainSchools;
