import React, { useState } from "react";

const MainOverview = () => {
  const [courses, setCourses] = useState([
    { name: "Javascript", img: "/img/javascript.jpg" },
    { name: "C#", img: "/img/c.jpg" },
    { name: "Go", img: "/img/golang.png" },
    { name: "Swift", img: "/img/swift.jpg" },
    { name: "Kotlin", img: "/img/kotlin.png" },
    { name: "Python", img: "/img/python.jpg" },
  ]);

  return <div className="relative w-full max-w-screen-2xl h-120"></div>;
};

export default MainOverview;
