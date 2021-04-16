import React, { useEffect, useRef } from "react";

const MainSchools = () => {
  const divRef = useRef();

  const schoolFocusEvent = () => {
    const back = document.querySelector(".back");
    console.log(window.scrollY, divRef.current.offsetTop);
    if (
      Math.round(window.scrollY / 100) * 100 ===
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

  useEffect(() => {
    window.addEventListener("scroll", throttle(schoolFocusEvent, 300), {
      passive: true,
    });
    return () => {
      window.addEventListener("scroll", throttle(schoolFocusEvent, 300), {
        passive: true,
      });
    };
  }, []);
  return (
    <div
      className="bg-black w-full max-w-screen-2xl h-longFull text-9xl flex items-center justify-center text-white"
      ref={divRef}
    >
      Schools!
    </div>
  );
};

export default MainSchools;
