import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-96 flex flex-col items-center justify-center bg-yellow-500 shadow-3xl">
      <div className="w-full h-full max-w-screen-2xl border flex items-center justify-center">
        <section className="w-1/2 h-full border-blue-800 border">
          <h1>ABOUT US</h1>
        </section>
        <section className="w-1/2 h-full border-blue-800 border flex">
          <div className="w-1/2 h-full border-red-900 border">
            <h1>FIND US</h1>
          </div>
          <div className="w-1/2 h-full border-red-900 border">
            <h1>LINKS</h1>
          </div>
        </section>
      </div>
      <footer className="w-full h-16 bg-yellow-600 flex justify-center">
        <div className="w-full max-w-screen-2xl">
          <h1 className="text-white text-md h-full flex justify-center items-center w-64">
            © 2021 LikeLion inc. /<p className="text-sm">멋쟁이사자처럼</p>
          </h1>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
