import React, { useEffect, useState } from "react";

const Footer = () => {
  const [logoColor, setColor] = useState("b");

  useEffect(() => {
    if (logoColor === "b") {
      setTimeout(() => {
        setColor("y");
      }, 3000);
    } else if (logoColor === "y") {
      setTimeout(() => {
        setColor("b");
      }, 3000);
    }
  }, [logoColor]);

  return (
    <footer className="w-full h-96 flex flex-col items-center justify-center bg-yellow-500 shadow-3xl">
      <div className="w-full h-full max-w-screen-2xl flex items-center justify-center">
        <section className="w-2/3 h-full flex">
          <div className="w-1/2 h-full px-4 pt-8">
            <h1>ABOUT US</h1>
            <p className="text-md mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              aliquam arcu at lacus pharetra aliquet. Etiam sollicitudin ex eu
              quam ornare, eu efficitur tortor iaculis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Phasellus aliquam arcu at lacus
              pharetra aliquet.
            </p>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src="/img/[LL]Hackyourlife_2_bk.png"
              alt=""
              className={`w-48 ${
                logoColor === "b" ? "opacity-100" : "opacity-0"
              } transition-all duration-1000`}
            />
          </div>
        </section>
        <section className="w-1/3 h-full flex">
          <div className="w-1/2 h-full pl-4 pt-8">
            <h1>FIND US</h1>
            <div className="flex flex-col mt-6">
              <h2 className="Montserrat">LikeLion Space Serengeti</h2>
              <p className="text-sm">
                13, Bongeunsa-ro 82-gil, Gangnam-gu, Seoul, Republic of Korea
              </p>
              <p className="text-sm">02-456-7890</p>
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="Montserrat">LikeLion Space Los Angeles</h2>
              <p className="text-sm">Somewhere in LA...</p>
              <p className="text-sm">123-456-7890</p>
            </div>
          </div>
          <div className="w-1/2 h-full pl-32 pt-8">
            <h1>LINKS</h1>
            <div className="flex flex-col mt-6">
              <a href="https://naver.com" className="text-sm mb-2">
                Naver
              </a>
              <a href="https://naver.com" className="text-sm mb-2">
                LikeLion Korea
              </a>
              <a href="https://Google.com" className="text-sm mb-2">
                Google
              </a>
              <a href="https://naver.com" className="text-sm mb-2">
                Someting else..
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className="w-full h-16 bg-yellow-600 flex justify-center">
        <div className="w-full max-w-screen-2xl flex relative">
          <h1 className="text-md h-full flex justify-center items-center w-64">
            © 2021 LikeLion inc. /<p className="text-sm">멋쟁이사자처럼</p>
          </h1>
          <span className="absolute w-72 h-full flex justify-evenly right-0">
            <img
              src="/img/001-facebook.svg"
              alt=""
              className="w-8 cursor-pointer"
            />
            <img
              src="/img/002-twitter.svg"
              alt=""
              className="w-8 cursor-pointer"
            />
            <img
              src="/img/008-youtube.svg"
              alt=""
              className="w-8 cursor-pointer"
            />
            <img
              src="/img/011-instagram.svg"
              alt=""
              className="w-8 cursor-pointer"
            />
          </span>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
