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

  return (
    <div className="relative w-full max-w-screen-2xl h-staticFull">
      <section className="bg-red-100 w-full h-1/2 mt-32 flex flex-wrap">
        {courses.map((course) => (
          <div
            key={course.name}
            className="relative w-1/3 h-1/2 flex items-center justify-center overflow-hidden cursor-pointer"
          >
            <div className="absolute w-full h-full bg-black opacity-0 hover:opacity-70 transition-all flex items-center justify-center">
              <h1 className="text-yellow-600 text-4xl Montserrat">
                {course.name}
              </h1>
            </div>
            <img src={course.img} alt={course.name} className="w-auto h-full" />
          </div>
        ))}
      </section>
      <div className="absolute bottom-0 w-full h-120 "></div>
    </div>
  );
};

export default MainOverview;
