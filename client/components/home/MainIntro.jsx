import React from "react";
import Terminal from "./Terminal";

const MainIntro = () => {
  return (
    <div className="relative w-full max-w-screen-2xl h-auto">
      <div className="w-full h-auto z-0">
        <Terminal />
        <div className="w-full h-1/4 bg-yellow-500 absolute z-10 flex items-start justify-center bottom-0">
          <h1 className="text-8xl Montserrat text-white z-10 mt-14">
            LIKELION US
          </h1>
        </div>
        <img src="/img/intro1.jpg" alt="intro" className="z-0 opacity-70" />
      </div>
    </div>
  );
};

export default MainIntro;
