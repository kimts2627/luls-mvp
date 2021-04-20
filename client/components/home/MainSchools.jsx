import React, { useEffect, useRef } from "react";
import Link from "next/link";

const MainSchools = () => {
  const divRef = useRef();

  const schoolFocusEvent = () => {
    const back = document.querySelector(".back");
    console.log(window.scrollY, divRef.current.offsetTop);
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

  function throttle(fn, delay) {
    let timer;
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          fn.apply(this, arguments);
        }, delay);
      }
    };
  }

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

  return (
    <div
      className="bg-black w-full max-w-screen-2xl h-longFull text-9xl flex items-center justify-center text-white"
      ref={divRef}
    >
      <section className="w-full h-120 flex justify-between items-center overflow-hidden">
        <div className="flex justify-between items-center w-auto">
          <Link href="/univ/ucla">
            <div className="w-1/4 cursor-pointer">
              <img src="/img/logo/ucla.png" alt="" className="w-full" />
            </div>
          </Link>
          <Link href="/univ/brown">
            <div className="w-1/4 cursor-pointer">
              <img src="/img/logo/brown.png" alt="" className="w-full" />
            </div>
          </Link>
          <Link href="/univ/berkeley">
            <div className="w-1/4 cursor-pointer">
              <img src="/img/logo/berkeley.png" alt="" className="w-full" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainSchools;
