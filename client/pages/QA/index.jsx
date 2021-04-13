import React, { useRef } from "react";
import Layout from "../../components/layout";

const QA = () => {
  const qaOnClickHandler = (e) => {
    let style = e.currentTarget.style;
    if (style.height !== "16rem") {
      e.currentTarget.style.height = "16rem";
      e.currentTarget.children[2].style.transform = "rotate(-90deg)";
    } else if (style.height === "16rem") {
      e.currentTarget.style.height = "5rem";
      e.currentTarget.children[2].style.transform = "rotate(90deg)";
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
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                sed do eiusmod tempor incididunt?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                cupidatat non proident?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <h1 className="text-xl Montserrat text-yellow-500  border-b-2 border-yellow-500 mb-6">
              Qualification
            </h1>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Sed ut perspiciatis unde omnis?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Excepteur sint occaecat?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <h1 className="text-xl Montserrat text-black border-b-2 border-black mb-6">
              Recruitment Schedule
            </h1>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Duis aute irure dolor in?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Lorem ipsum?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                minim veniam?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-4 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                Duis aute irure dolor in reprehenderit?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
            <h1 className="text-xl Montserrat text-yellow-500 border-b-2 border-yellow-500 mb-6">
              Payment
            </h1>
            <div
              className="w-full h-20 shadow-md rounded-lg mb-20 cursor-pointer border transition-all bg-white relative overflow-hidden hover:shadow-inner"
              onClick={(e) => qaOnClickHandler(e)}
            >
              <h2 className="w-full h-20 flex items-center ml-6 text-lg">
                ullamco laboris nisi ut aliquip ex?
              </h2>
              <p className="w-full h-1/2 mx-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Phasellus aliquam arcu at lacus pharetra aliquet.
                <br />
                Etiam sollicitudin ex eu quam ornare, eu efficitur tortor
                iaculis.
                <br />
                Curabitur pellentesque placerat volutpat.Praesent rhoncus, orci
                a facilisis fermentum,
                <br />
                quam mauris sagittis metus, vel bibendum elit tellus vitae nisi.
              </p>
              <img
                src="/img/arrow.svg"
                alt="more"
                className="absolute w-4 top-8 right-6 transform rotate-90 transition-all"
              />
            </div>
          </main>
        </section>
      </div>
    </Layout>
  );
};

export default QA;
