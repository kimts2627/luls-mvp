import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { useSelector } from "react-redux";

const SingleTask = () => {
  return (
    <div className="w-full h-16 bg-white shadow-md border mb-2 cursor-pointer"></div>
  );
};

const Tasks = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { permission, F_Name, L_Name } = userInfo;
  const name = `${F_Name} ${L_Name}`;

  return (
    <Layout>
      <div className="w-full h-staticFull flex items-center justify-center mt-28">
        <div className="relative w-full max-w-screen-lg h-full bg-red-100 p-16">
          <span className="absolute top-5 right-5">
            <h2>{`Welcome, ${permission} ${name}!`}</h2>
          </span>
          <div className="text-center mb-16">
            <h1 className="text-5xl">Task List</h1>
            <p className="text-xl">Meot-sa univ.</p>
          </div>
          <section className="bg-white w-full h-150 p-4 pt-7">
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
          </section>
          <span></span>
          <button className="border border-red-500">new post</button>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
