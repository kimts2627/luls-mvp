import React from "react";
import MainContactUs from "./MainContactUs";
import MainHallOfFame from "./MainHallOfFame";
import MainIntro from "./MainIntro";
import MainJoinAdmin from "./MainJoinAdmin";
import MainJoinStudent from "./MainJoinStudent";
import MainOverview from "./MainOverview";
import MainSchools from "./MainSchools";

const HackYourLife = (position) => {
  return (
    <div
      className={`absolute ${
        position === "top" ? "top-3" : "bottom-3"
      } w-full max-w-screen-2xl h-4 opacity-50 overflow-hidden`}
    >
      <div className="flex justify-center h-full">
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el, idx) => (
          <img
            src="/img/[LL]Hackyourlife_wh.png"
            key={idx}
            alt=""
            className="ml-2"
          />
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <MainIntro />
      <div className="relative w-screen h-96 bg-gray-500 shadow-inner z-0 flex flex-col items-center justify-center">
        {/* <HackYourLife position={"top"} />
        <HackYourLife position={"bottom"} /> */}
        <h1 className="Montserrat text-white mb-10 text-3xl">
          Great Opportunity for your Career
        </h1>
        <p className="text-center text-white text-xl">
          <span className="border-b-2 border-yellow-500">
            Ut enim ad minim veniam,
          </span>
          quis nostrud exercitation ullamco laboris
          <br />
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          <span className="border-b-2 border-yellow-500">consectetur</span>
          adipiscing elit
        </p>
      </div>
      <MainOverview />
      <MainSchools />
      {/* <MainHallOfFame />
      <MainJoinAdmin />
      <MainJoinStudent />
      <MainContactUs /> */}
    </main>
  );
};

export default Main;
