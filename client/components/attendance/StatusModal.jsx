import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const StatusModal = ({ student, week }) => {
  const handleClick = (e) => {
    switch (e.target.textContent) {
      case "check":
        console.log(
          `${student.l_name}${student.f_name}, Week-${week.att.id}, checked!`
        );
        axios
          .patch(
            `https://likelionustest.com/att/checks/${week.att.id}/${student.id}`,
            {
              status: 1,
              comment: null,
            }
          )
          .then(console.log);
        return;
      case "non-check":
        console.log(
          `${student.l_name}${student.f_name}, Week-${week.att.id}, non-checked...`
        );
        axios
          .patch(
            `https://likelionustest.com/att/checks/${week.att.id}/${student.id}`,
            {
              status: 3,
              comment: null,
            }
          )
          .then(console.log);
        return;
      case "delay-15min":
        console.log(
          `${student.l_name}${student.f_name}, Week-${week.att.id}, delay-15min...!`
        );
        axios
          .patch(
            `https://likelionustest.com/att/checks/${week.att.id}/${student.id}`,
            {
              status: 2,
              comment: null,
            }
          )
          .then(console.log);
        return;
      default:
        return;
    }
  };
  return (
    <div className="absolute w-full h-full shadow-inner bg-white flex flex-col justify-center items-center hidden opacity-80">
      <section
        className="flex-1 border w-full text-center"
        onClick={(e) => handleClick(e)}
      >
        check
      </section>
      <section
        className="flex-1 border w-full text-center"
        onClick={(e) => handleClick(e)}
      >
        non-check
      </section>
      <section
        className="flex-1 border w-full text-center"
        onClick={(e) => handleClick(e)}
      >
        delay-15min
      </section>
    </div>
  );
};

export default StatusModal;
