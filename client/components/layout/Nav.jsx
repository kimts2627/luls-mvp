import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Nav = ({ headerSize }) => {
  const router = useRouter();

  const [positions, setPositions] = useState({
    school: 0,
    fame: 0,
    admin: 0,
    student: 0,
    contact: 0,
  });

  //! 마운트 시 각 섹션의 위치를 상태에 주입해줌
  useEffect(() => {
    if (router.pathname === "/") {
      setPositions({
        school: document.querySelector(".school").offsetTop - 200,
        fame: document.querySelector(".fame").offsetTop - 200,
        admin: document.querySelector(".admin").offsetTop - 200,
        student: document.querySelector(".student").offsetTop - 200,
        contact: document.querySelector(".contact").offsetTop - 200,
      });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 h-12 w-full ${
        router.pathname !== "/"
          ? "mt-0"
          : headerSize === "normal"
          ? "mt-28"
          : "mt-0"
      } transition-all z-20 flex justify-center bg-gray-100 shadow-sm`}
    >
      <div className="w-full h-full max-w-screen-2xl flex pl-6 items-center">
        <ul className="flex justify-start w-full">
          <li
            className="cursor-pointer opacity-70 mr-6 hover:opacity-100 hover:border-r-8 border-yellow-700"
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
            className="cursor-pointer opacity-70 mr-6 hover:opacity-100"
            onClick={() =>
              window.scrollTo({
                top: positions.school || 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Schools
          </li>
          <li
            className="cursor-pointer opacity-70 mr-6 hover:opacity-100"
            onClick={() =>
              window.scrollTo({
                top: positions.fame || 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Hall of Fame
          </li>
          <li
            className="cursor-pointer opacity-70 mr-6 hover:opacity-100"
            onClick={() =>
              window.scrollTo({
                top: positions.admin || 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Join as Admin
          </li>
          <li
            className="cursor-pointer opacity-70 mr-6 hover:opacity-100"
            onClick={() =>
              window.scrollTo({
                top: positions.student || 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Join as Student
          </li>
          <li
            className="cursor-pointer opacity-70 mr-6 hover:opacity-100"
            onClick={() =>
              window.scrollTo({
                top: positions.contact || 0,
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
