import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFalsyStatus } from "../../reducers/attendance";

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
  const dispatch = useDispatch();

  const handlingFalsyStatus = useCallback((statusInfo) => {
    dispatch(handleFalsyStatus(statusInfo));
  }, []);

  //! 각 버튼 클릭 핸들링하는 함수
  const handleClick = (e) => {
    switch (e.target.id) {
      case "C":
        modifyStatusData(week, student, 1, null);
        return;
      case "N-C":
        modifyStatusData(week, student, 3, null);
        return;
      case "D":
        modifyStatusData(week, student, 2, null);
        return;
      case "0":
        modifyStatusData(week, student, 0, null);
        return;
      default:
        console.log("mo");
        return;
    }
  };

  //! params 데이터를 통해, 데이터를 patch 하는 클로저 함수
  const modifyStatusData = (week, student, status, comment) => {
    console.log(
      `${student.l_name}${student.f_name}, Week-${week.att.id}, checked!`
    );
    axios
      .patch(
        `https://likelionustest.com/admins/att/checks/${week.att.id}/${student.id}`,
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

  const handleButtonColors = (button) => {
    switch (button) {
      case "C":
        return "bg-green-400";
      case "N-C":
        return "bg-red-400";
      case "D":
        return "bg-yellow-400";
      default:
        return "bg-white";
    }
  };

  return (
    <>
      <div className="absolute w-full h-full shadow-inner flex justify-evenly items-center hidden">
        {["C", "N-C", "D", "0"].map((button) => (
          <section
            className={`${handleButtonColors(
              button
            )} w-7 h-7 text-center rounded-full hover:${handleButtonColors(
              button
            ).replace("400", "600")}`}
            id={button}
            key={button}
            onClick={(e) => handleClick(e)}
          ></section>
        ))}
      </div>
    </>
  );
};

export default StatusModal;
