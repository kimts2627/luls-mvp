import React from "react";
import MainContactUs from "./MainContactUs";
import MainHallOfFame from "./MainHallOfFame";
import MainIntro from "./MainIntro";
import MainJoinAdmin from "./MainJoinAdmin";
import MainJoinStudent from "./MainJoinStudent";
import MainOverview from "./MainOverview";
import MainSchools from "./MainSchools";

const Main = () => {
  return (
    <main className="bg-blue-100 w-full max-w-screen-2xl">
      <MainIntro />
      <MainOverview />
      <MainSchools />
      <MainHallOfFame />
      <MainJoinAdmin />
      <MainJoinStudent />
      <MainContactUs />
    </main>
  );
};

export default Main;
