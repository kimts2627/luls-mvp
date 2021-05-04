import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const StatusModal = ({
  student,
  week,
  dataChangeTrigger,
  setTrigger,
  currentComment,
  setComment,
  setCommentInput,
  falsyStatusData,
  setFalsyStatusData,
}) => {
  //! 각 버튼 클릭 핸들링하는 함수
  const handleClick = (e) => {
    switch (e.target.textContent) {
      case "check":
        modifyStatusData(week, student, 1, null);
        return;
      case "non-check":
        // setCommentInput(true);
        modifyStatusData(week, student, 3, currentComment);
        return;
      case "delay-15min":
        // setCommentInput(true);
        modifyStatusData(week, student, 2, currentComment);
        return;
      case "neutral":
        modifyStatusData(week, student, 0, null);
        return;
      default:
        return;
    }
  };

  const falsyDataPatch = () => {};

  //! params 데이터를 통해, 데이터를 patch 하는 클로저 함수
  const modifyStatusData = (week, student, status, comment) => {
    console.log(
      `${student.l_name}${student.f_name}, Week-${week.att.id}, checked!`
    );
    axios
      .patch(
        `https://likelionustest.com/att/checks/${week.att.id}/${student.id}`,
        {
          status: status,
          comment: !comment ? null : comment,
        }
      )
      .then((res) => {
        setTrigger(!dataChangeTrigger);
        setComment("");
      });
  };

  return (
    <>
      <div className="absolute w-full h-full shadow-inner bg-white flex flex-col justify-center items-center hidden opacity-80">
        {["check", "non-check", "delay-15min", "neutral"].map((button) => (
          <section
            className="flex-1 border w-full text-center"
            onClick={(e) => handleClick(e)}
          >
            {button}
          </section>
        ))}
      </div>
    </>
  );
};

export default StatusModal;
