import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import { handleNotice } from "../../../reducers/notice";

const SingleNotice = () => {
  return (
    <div className="bg-blue-50 w-full h-12 border-b border-gray-300 flex">
      <span className="w-32 bg-yellow-50 flex items-center"></span>
      <span className="flex-1 bg-green-50 flex items-center"></span>
      <span className="w-40 bg-red-50 flex items-center"></span>
    </div>
  );
};

const UclaHome = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notice.notices);

  const handlingNotice = useCallback((notice) => {
    dispatch(handleNotice(notice));
  });

  useEffect(() => {
    axios
      .get("https://www.likelionustest.com/bulletin/list?school=멋사대학교", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        handlingNotice(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [notices]);

  return (
    <Layout>
      <div className="h-staticFull mt-28 w-full flex flex-col items-center">
        <header className="relative w-full h-1/3 overflow-hidden flex items-center">
          <img src="/img/ucla-campus.jpeg" alt="" className="w-full z-0" />
          <div className="absolute top-0 bg-blue-400 opacity-40 w-full h-full z-10" />
        </header>
        <div className="absolute h-120 z-10 top-72">
          <img src="/img/logo/ucla.png" alt="" className="h-full" />
        </div>
        <main className="relative w-full max-w-screen-xl h-full">
          <section className="h-120 bg-red-50 w-full flex items-center justify-center text-8xl mt-10">
            Who we are?
          </section>
          <section className="h-2/3 w-full p-5">
            <h1 className="text-3xl mb-14 Montserrat text-yellow-500">
              Notice.
            </h1>
            <article className="w-full h-120 max-h-120 shadow-md rounded-md">
              <header className="w-full h-12 bg-gray-100 flex items-center p-2 shadow-md">
                <h2 className="w-32 border-r border-gray-500 mr-2">Univ.</h2>
                <h2 className="flex-1 border-r border-gray-500 mr-2">Title.</h2>
                <h2 className="w-36">Date.</h2>
              </header>
              <div className="w-full p-1">
                {notices
                  ? notices.map((notice) => (
                      <SingleNotice key={notice.id} notice={notice} />
                    ))
                  : null}
              </div>
            </article>
            <button className="absolute bottom-0 right-6 bg-yellow-400 rounded-md p-2 cursor-pointer mb-10">
              New Notice
            </button>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default UclaHome;
