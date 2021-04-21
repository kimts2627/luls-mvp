import React, { useEffect, useRef } from "react";

const ToyProps = () => {
  const allRef = useRef();
  const school = document.querySelector(".school");
  const fame = document.querySelector(".fame");
  useEffect(() => {
    allRef.current.style.top = `${school.offsetTop * 1.15}px`;
  });

  useEffect(() => {
    window.addEventListener("mousewheel", (delta) => {});
  });
  return (
    <div
      className="absolute border border-red-500 w-screen h-longFull z-10"
      ref={allRef}
    >
      <img
        src="/img/donut-or.png"
        alt=""
        className="absolute toy left-36 top-96 w-24"
      />
      <img
        src="/img/triangle-or.png"
        alt=""
        className="absolute toy left-96 top-24 w-12"
      />
      <img
        src="/img/triangle-or.png"
        alt=""
        className="absolute toy top-36 right-80 w-32"
      />
      <img
        src="/img/reg-or.png"
        alt=""
        className="absolute toy bottom-96 mb-96 left-44"
      />
      <img
        src="/img/reg-or.png"
        alt=""
        className="absolute toy bottom-80 mb-44 left-16 w-16"
      />
      <img
        src="/img/donut-or.png"
        alt=""
        className="absolute toy right-44 bottom-32"
      />
      <img
        src="/img/triangle-or.png"
        alt=""
        className="absolute toy top-96 mt-96 right-60 w-52"
      />
    </div>
  );
};

export default ToyProps;
