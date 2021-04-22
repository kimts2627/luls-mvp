import React, { useRef, useEffect } from "react";

const MainHallOfFame = () => {
  return (
    <div className="relative bg-black w-full max-w-screen-2xl h-staticFull flex flex-col items-center fame overflow-hidden">
      <h1 className="text-white text-5xl Montserrat border-b-4 border-yellow-500 mb-40 mt-24 z-10">
        Hall of Fame
      </h1>
      <section className="w-full h-120 flex items-center justify-evenly z-10">
        {[0, 1, 2, 4].map((el) => (
          <div
            className="w-80 h-full flex flex-col justify-evenly items-center bg-gray-50 rounded-xl"
            key={el}
          >
            <div className="w-40 h-40 rounded-full -mt-20 overflow-hidden shadow-md">
              <img src="/img/female.jpeg" alt="" className="w-full" />
            </div>
            <div>
              <h1 className="text-xl text-center -mt-20 mb-24">
                Ut enim ad minim veniam
              </h1>
              <p className="text-center text-md -mb-20">
                nisi ut aliquip ex ea commodo consequat.<br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
                nisi ut aliquip ex
              </p>
            </div>
          </div>
        ))}
      </section>
      <p className="w-full text-white text-center text-2xl mt-60">
        quis nostrud exercitation ullamco laboris
        <br />
        nisi ut aliquip ex ea commodo consequat.{" "}
        <span className="text-yellow-500">Lorem ipsum</span> dolor sit amet,
        quis nostrud exercitation ullamco laboris
        <br />
        nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
      </p>
      <div className="w-longFull h-44 bg-gradient-to-r from-yellow-300 to-yellow-700 opacity-90 absolute transform rotate-12 z-0 top-120" />
    </div>
  );
};

export default MainHallOfFame;
