import Head from "next/head";
import MainContactUs from "../components/MainContactUs";
import MainHallOfFame from "../components/MainHallOfFame";
import MainIntro from "../components/MainIntro";
import MainJoinAdmin from "../components/MainJoinAdmin";
import MainJoinStudent from "../components/MainJoinStudent";
import MainOverview from "../components/MainOverview";
import MainSchools from "../components/MainSchools";

export default function Home() {
  return (
    <div className="w-full mt-40 flex items-center flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainIntro />
      <MainOverview />
      <MainSchools />
      <MainHallOfFame />
      <MainJoinAdmin />
      <MainJoinStudent />
      <MainContactUs />
    </div>
  );
}
