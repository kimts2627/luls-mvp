import React from "react";

const Nav = ({ headerSize }) => {
  return (
    <nav
      className={`fixed top-0 bg-gray-100 h-12 w-full mt-${
        headerSize === "normal" ? "28" : "0"
      } transition-all z-0 flex justify-center`}
    >
      <div className="w-full h-full bg-gray-100 max-w-screen-2xl flex pl-16 items-center">
        <ul className="flex justify-between w-1/2">
          <li
            className="cursor-pointer text-grey-800"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Intro
          </li>
          <li
            className="cursor-pointer text-grey-800"
            onClick={() =>
              window.scrollTo({
                top: 1350,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            OverView
          </li>
          <li
            className="cursor-pointer text-grey-800"
            onClick={() =>
              window.scrollTo({
                top: 2700,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Schools
          </li>
          <li
            className="cursor-pointer text-grey-800"
            onClick={() =>
              window.scrollTo({
                top: 4000,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Hall of Fame
          </li>
          <li
            className="cursor-pointer text-grey-800"
            onClick={() =>
              window.scrollTo({
                top: 5300,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Join as Admin
          </li>
          <li
            className="cursor-pointer text-grey-800"
            onClick={() =>
              window.scrollTo({
                top: 6600,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Join as Student
          </li>
          <li
            className="cursor-pointer text-grey-800"
            onClick={() =>
              window.scrollTo({
                top: 7900,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Contact us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
