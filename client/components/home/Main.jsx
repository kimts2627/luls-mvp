import React from "react";
import MainContactUs from "./MainContactUs";
import MainHallOfFame from "./MainHallOfFame";
import MainIntro from "./MainIntro";
import MainJoinAdmin from "./MainJoinAdmin";
import MainJoinStudent from "./MainJoinStudent";
import MainSchools from "./MainSchools";

const Main = () => {
  return (
    <main className="w-full flex flex-col items-center z-10">
      <MainIntro />
      <div className="relative w-screen h-96 bg-gray-500 shadow-inner z-0 flex flex-col items-center justify-center">
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
      <MainSchools />
      <MainHallOfFame />
      <MainJoinAdmin />
      <MainJoinStudent />
      <MainContactUs />
    </main>
  );
};

export default Main;
