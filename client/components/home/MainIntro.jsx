import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const NewsBar = () => {
  const [currentNews, setNews] = useState(0);
  const router = useRouter();

  const newses = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit consecte",
    "Ut enim ad minim veniam, quis Ut enim",
    "Duis aute irure dolor in reprehenderit",
  ];

  const videos = [
    "https://www.youtube.com/embed/p1SU_MJCF7I?controls=0",
    "https://www.youtube.com/embed/8VvDzb7-P18?controls=0",
    "https://www.youtube.com/embed/FSvugctoYzs?controls=0",
  ];

  //! 홈페이지 일때 5초간격 지속 뉴스갱신
  useEffect(() => {
    if (router.pathname === "/") {
      if (currentNews === 2) {
        setTimeout(() => {
          setNews(0);
        }, 5000);
      } else {
        setTimeout(() => {
          setNews(currentNews + 1);
        }, 5000);
      }
    }
  }, [currentNews]);

  return (
    <div className="w-full h-16 bg-gradient-to-r from-yellow-400 to-yellow-700 flex justify-center items-center">
      <span className="w-auto h-1/2 flex">
        <h1 className="flex items-center justify-evenly w-24 h-full Montserrat text-red-800">
          <img src="/img/bell.png" alt="" className="w-4" />
          Notice:
        </h1>
        <div className="w-120 h-full flex justify-center items-center text-md text-center cursor-pointer hover:underline text-gray-800">
          {newses[currentNews]}
        </div>
      </span>
    </div>
  );
};

const MainIntro = () => {
  const [currentVideo, setVideo] = useState(
    "https://www.youtube.com/embed/p1SU_MJCF7I?controls=0"
  );
  const thumbRef = useRef();

  //! 상태에 등록된 링크에 따라 플레이어 동영상 변경
  useEffect(() => {
    if (thumbRef.current.src === currentVideo) {
      thumbRef.current.style.border = "solid black 3px";
    }
  }, [currentVideo]);

  return (
    <div className="relative w-full max-w-screen-2xl h-auto flex flex-col intro">
      <div className="relative flex justify-center items-center h-120 overflow-hidden">
        <Image
          src="/img/intro.jpg"
          alt="intro"
          width={1536}
          height={1000}
          className="z-0 opacity-100 w-screen"
        />
        <div className="absolute w-full h-full bg-black z-10 opacity-30"></div>
        <img src="/img/Vertical.wh.png" alt="" className="w-80 z-10 absolute" />
        <p className="text-white absolute z-10 text-lg mt-44">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="w-full h-staticFull z-10">
        <NewsBar />
        <section className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white">
          <h1 className="text-4xl mt-44 mb-12 Montserrat">
            Forge your creativity into an inpiration for all
            <div className="w-full h-1 bg-yellow-500" />
          </h1>
          <p className="text-center text-2xl mb-36">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            <br></br>
            nisi ut aliquip ex ea commodo consequat.<br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="w-full h-80 absolute z-0 mt-96 flex justify-between opacity-70">
            <img src="/img/triangle-bk.png" alt="" className="h-full ml-36" />
            <img src="/img/donut-or.png" alt="" className="h-full mr-40" />
          </div>
          <div className="z-10">
            <iframe
              width="900"
              height="500"
              src={currentVideo}
              title="YouTube video player"
              frameBorder=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="flex justify-between w-72 h-auto mt-8">
              <img
                src="/img/thumb1.jpeg"
                alt=""
                className="mr-4 cursor-pointer hover:shadow-2xl"
                onClick={() =>
                  setVideo(
                    "https://www.youtube.com/embed/FSvugctoYzs?controls=0"
                  )
                }
                ref={thumbRef}
              />
              <img
                src="/img/thumb2.jpeg"
                alt=""
                className="mr-5 cursor-pointer hover:shadow-2xl"
                onClick={() =>
                  setVideo(
                    "https://www.youtube.com/embed/8VvDzb7-P18?controls=0"
                  )
                }
                ref={thumbRef}
              />
              <img
                src="/img/thumb3.jpeg"
                alt=""
                className="cursor-pointer hover:shadow-2xl"
                onClick={() =>
                  setVideo(
                    "https://www.youtube.com/embed/p1SU_MJCF7I?controls=0"
                  )
                }
                ref={thumbRef}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainIntro;
