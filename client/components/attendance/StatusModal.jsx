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
    switch (e.target.textContent) {
      case "check":
        modifyStatusData(week, student, 1, null);
        handlingFalsyStatus({});
        return;
      case "non-check":
        handlingFalsyStatus({
          week: week,
          student: student,
          status: 3,
        });
        return;
      case "delay":
        handlingFalsyStatus({
          week: week,
          student: student,
          status: 2,
        });
        return;
      case "neutral":
        modifyStatusData(week, student, 0, null);
        handlingFalsyStatus({});
        return;
      default:
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

  return (
    <>
      <div className="absolute w-full h-full shadow-inner bg-white flex flex-col justify-center items-center hidden opacity-80">
        {["check", "non-check", "delay", "neutral"].map((button) => (
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
