import React from "react";
import Layout from "../../components/layout";

const QA = () => {
  const qaOnClickHandler = (e) => {
    let style = e.target.style;
    if (style.height !== "16rem") {
      e.target.style.height = "16rem";
    } else if (style.height === "16rem") {
      e.target.style.height = "5rem";
    }
  };

  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-center text-bold mt-28">
        <img
          src="/img/background.png"
          alt=""
          className="absolute w-full top-28 z-0 opacity-70"
        />
        <section className="w-full max-w-screen-md h-full overflow-hidden z-20">
          <header className="w-full h-60 flex justify-center items-center">
            <h1 className="relative Montserrat-bold text-9xl text-black">
              FAQs
              <img
                src="/img/[LL]Hackyourlife_bk.png"
                alt=""
                className="absolute top-28 left-2 w-44"
              />
            </h1>
          </header>
          <main className="">
            <h1 className="text-xl Montserrat text-black border-b-2 border-black mb-6">
              What is LikeLion?
            </h1>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur?
              </h2>
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                sed do eiusmod tempor incididunt?
              </h2>
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                cupidatat non proident?
              </h2>
            </div>
            <h1 className="text-xl Montserrat text-yellow-500  border-b-2 border-yellow-500 mb-6">
              Qualification
            </h1>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Sed ut perspiciatis unde omnis?
              </h2>
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Excepteur sint occaecat?
              </h2>
            </div>
            <h1 className="text-xl Montserrat text-black border-b-2 border-black mb-6">
              Recruitment Schedule
            </h1>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Duis aute irure dolor in?
              </h2>
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Lorem ipsum?
              </h2>
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                minim veniam?
              </h2>
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Duis aute irure dolor in reprehenderit?
              </h2>
            </div>
            <h1 className="text-xl Montserrat text-yellow-500 border-b-2 border-yellow-500 mb-6">
              Payment
            </h1>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-20 cursor-pointer border transition-all bg-white"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                ullamco laboris nisi ut aliquip ex?
              </h2>
            </div>
          </main>
        </section>
      </div>
    </Layout>
  );
};

export default QA;
