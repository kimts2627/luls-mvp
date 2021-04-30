import React, { useEffect, useRef } from "react";
import Link from "next/link";

const MainSchools = () => {
  const divRef = useRef();
  const backRef = useRef();

  //! 스쿨 섹션에 진입 시 배경이 암전되는 이벤트 함수
  const schoolFocusEvent = () => {
    if (divRef.current !== null) {
      const back = document.querySelector(".back");
      const fame = document.querySelector(".fame");
      if (
        Math.round(window.scrollY / 100) * 100 >=
          Math.round(divRef.current.offsetTop / 100) * 100 &&
        Math.round(window.scrollY / 100) * 100 <
          Math.round((fame.offsetTop + fame.offsetHeight / 2) / 100) * 100
      ) {
        back.style.backgroundColor = "rgb(0, 0, 0)";
      } else if (
        Math.round(window.scrollY / 100) * 100 <
          Math.round(divRef.current.offsetTop / 100) * 100 ||
        Math.round(window.scrollY / 100) * 100 >=
          Math.round((fame.offsetTop + fame.offsetHeight / 2) / 100) * 100
      ) {
        back.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  };

  //! 마운트 시 해당 이벤트함수 window에 등록
  useEffect(() => {
    window.addEventListener("scroll", schoolFocusEvent, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", schoolFocusEvent, {
        passive: true,
      });
    };
  }, []);

  //! 아이콘 호버 시 배경에 학교이미지 보여주는 함수
  const showBackground = (e) => {
    backRef.current.style.opacity = "0.6";
    e.currentTarget.style.transform = "scale(1.1)";
    let src = e.currentTarget.children[0].src;
    console.log(src.slice(36, src.length - 4));
    backRef.current.src = `/img/${src.slice(36, src.length - 4)}-campus.jpeg`;
  };

  //! 호버 해제 시 배경 지워주는 함수
  const hideBackground = (e) => {
    e.currentTarget.style.transform = "scale(1.0)";
    backRef.current.style.opacity = "0";
  };

  return (
    <div
      className="relative bg-black w-full max-w-screen-2xl h-staticFull text-9xl flex flex-col items-center justify-center text-white school"
      ref={divRef}
    >
      <h1 className="text-3xl mt-96">
        <span className="text-yellow-500">LIKELION</span> nisi ut aliquip 6x ea
        commodo consequat. Lorem ipsum dolor sit amet
      </h1>
      <p className="text-2xl mt-10 mb-44">
        quis nostrud exercitation ullamco laboris
      </p>
      <section className="w-full h-120 flex justify-between items-center overflow-hidden">
        <div className="w-full max-w-screen-2xl h-96 absolute z-0 overflow-hidden flex items-center">
          <img
            src=""
            alt=""
            ref={backRef}
            className="w-full transition-all duration-300"
          />
        </div>
        <div className="flex justify-evenly items-center w-full z-10">
          {["ucla", "brown", "berkeley", "ucla", "brown", "berkeley"].map(
            (univ, index) => (
              <Link href={`/univ/ucla`} key={univ + index}>
                <div
                  className={`${
                    univ === "brown" ? "w-32" : "w-44"
                  } cursor-pointer transition-all duration-200`}
                  onMouseOver={(e) => showBackground(e)}
                  onMouseOut={(e) => hideBackground(e)}
                >
                  <img
                    src={`/img/logo/${univ}.png`}
                    alt=""
                    className="w-full"
                  />
                </div>
              </Link>
            )
          )}
        </div>
      </section>
      <h3 className="text-2xl text-yellow-400 animate-blink">
        Check out Likelions each universities
      </h3>
      <img src="/img/lion.png" alt="" className="absolute -top-16 w-20" />
    </div>
  );
};

export default MainSchools;
