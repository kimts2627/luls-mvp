import React, { useEffect, useRef, useState } from "react";

const MainContactUs = () => {
  const startRef = useRef();
  // let currentScroll = 0;

  // useEffect(() => {
  //   window.addEventListener("mousewheel", (e) => {
  //     let style = startRef.current.style;
  //     if (e.wheelDelta > 0) {
  //       console.log("up");
  //       startRef.current.style.top = `${
  //         startRef.current.style.top.slice(
  //           0,
  //           startRef.current.style.top.length - 2
  //         ) - 0.5
  //       }px`;
  //     } else if (e.wheelDelta < 0) {
  //       console.log("down");
  //       startRef.current.style.top = `${
  //         startRef.current.style.top.slice(
  //           0,
  //           startRef.current.style.top.length - 2
  //         ) + 0.5
  //       }px`;
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", () => {
  //       let style = startRef.current.style;
  //       if (window.scrollY > currentScroll) {
  //         style.marginTop = `${
  //           style.marginTop.slice(0, style.marginTop.length - 2) - 1
  //         }px`;
  //         setScroll(window.scrollY);
  //       } else if (window.scrollY < currentScroll) {
  //         style.marginTop = `${
  //           style.marginTop.slice(0, style.marginTop.length - 2) + 1
  //         }px`;
  //         setScroll(window.scrollY);
  //       }
  //     });
  //   };
  // }, []);

  return (
    <div className="relative w-full max-w-screen-2xl h-150 flex flex-col items-center justify-evenly contact">
      <div className="border-b-4 border-yellow-500 z-10">
        <h1 className="text-5xl">Contact Us</h1>
      </div>
      <section className="w-3/4 h-96 border-8 border-yellow-500 flex items-center z-10 bg-white shadow-md">
        <div className="border-r-2 border-yellow-600 w-2/3 h-3/4 p-12 flex flex-col justify-evenly">
          <h2 className="text-2xl Montserrat">LIKELION space Los Angeles</h2>
          <p>
            <span className="text-yellow-500 text-xl">Located</span> Somewhere
            in Los Angeles...
          </p>
          <h2 className="text-2xl Montserrat">LIKELION space Serengeti</h2>
          <p>
            <span className="text-yellow-500 text-xl">Located</span> 13,
            Bongeunsa-ro 82-gil, Gangnam-gu, Seoul, Republic of Korea
          </p>
        </div>
        <div className="w-1/3 h-full p-12 flex flex-col justify-evenly items-center text-center">
          <h4>simba@likelion.com</h4>
          <h4>034-342-2342</h4>
          <p>
            nisi ut aliquip ex ea commodo consequat.<br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </section>
      <div
        className="absolute top-0 w-full h-120 transition-all"
        ref={startRef}
      >
        <img
          src="/img/triangle-or.png"
          alt=""
          className="absolute top-44 left-80 w-2 transform rotate-12"
        />
        <img
          src="/img/triangle-bk.png"
          alt=""
          className="absolute right-96 top-12 w-6 transform rotate-45"
        />
        <img
          src="/img/donut-or.png"
          alt=""
          className="absolute bottom-12 left-20 w-6 transform rotate-12"
        />
        <img
          src="/img/donut-bk.png"
          alt=""
          className="absolute bottom-24 right-24 w-6 transform rotate-12"
        />
        <img
          src="/img/reg-or.png"
          alt=""
          className="absolute bottom-36 right-20 w-2 transform rotate-12"
        />
        <img
          src="/img/reg-bk.png"
          alt=""
          className="absolute bottom-0 left-12 w-6 transform rotate-12"
        />
        <img
          src="/img/reg-bk.png"
          alt=""
          className="absolute top-36 left-24 w-6 transform rotate-12"
        />
        <img
          src="/img/reg-or.png"
          alt=""
          className="absolute top-0 left-96 w-6 transform rotate-12"
        />
        <img
          src="/img/donut-or.png"
          alt=""
          className="absolute top-0 right-6 w-6 transform rotate-12"
        />
        <img
          src="/img/triangle-bk.png"
          alt=""
          className="absolute bottom-0 right-0 w-2 transform rotate-12"
        />
      </div>
      <div className="absolute top-72 left-60 z-0 w-3/4 h-96 bg-yellow-500 shadow-md" />
    </div>
  );
};

export default MainContactUs;
