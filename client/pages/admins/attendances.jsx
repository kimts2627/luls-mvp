import axios from "axios";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Layout from "../../components/layout";
import StatusModal, {
  modifyStatusData,
} from "../../components/attendance/StatusModal";
import { useDispatch, useSelector } from "react-redux";
import { handleFalsyStatus } from "../../reducers/attendance";

const AttendanceChart = ({
  attendance,
  setTrigger,
  dataChangeTrigger,
  currentComment,
  setComment,
  setCommentInput,
  falsyStatusData,
  setFalsyStatusData,
}) => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //! 출석 상태에 따른 색 변경 함수
  const setAttendanceStatusColor = (week) => {
    switch (week.status) {
      case 1:
        return "bg-green-300";
      case 2:
        return "bg-yellow-300";
      case 3:
        return "bg-red-300";
      default:
        return "bg-gray-50";
    }
  };

  const memoModifyRequest = (week, student, e) => {
    console.log(e.currentTarget.previousSibling);
    axios
      .patch(
        `https://likelionustest.com/admins/att/checks/${week.att.id}/${student.id}`,
        {
          comment: e.target.previousSibling.value,
        }
      )
      .then((res) => {
        e.target.previousSibling.value = "";
        console.log("clear");
        setTrigger(!dataChangeTrigger);
      });
  };

  return (
    <div className="relative w-3/4 h-150">
      <aside className="absolute z-10 h-full w-36 bg-blue-300 pt-28 flex flex-col items-center justify-start">
        {attendance.map((student) => (
          <h1
            key={student.l_name}
            className="h-24 border w-full flex justify-center items-center"
          >
            {`${student.l_name} ${student.f_name}`}
          </h1>
        ))}
      </aside>
      <div className="z-0 absolute w-full h-full bg-white shadow-md overflow-scroll">
        <aside className="h-full w-longFull bg-gray-50 absolute top-0 left-36">
          <div className="w-full h-28 bg-blue-300 flex">
            {weeks.map((week) => (
              <div
                className="border flex justify-center items-center h-full w-36"
                key={week}
              >{`Week-${week}`}</div>
            ))}
          </div>
          {attendance.map((student) => (
            <div key={student.id} className="w-full h-24 bg-gray-50 flex">
              {student.mem_att.map((week) => (
                <div
                  key={week.att.date}
                  className={`border w-36 h-full ${setAttendanceStatusColor(
                    week
                  )} cursor-pointer relative flex justify-center items-end status text-xs truncate p-1`}
                >
                  <input
                    className="w-full h-1/2 bg-white p-0.5 overflow-scroll focus:outline-none flex placeholder-gray-700"
                    type="text"
                    placeholder={week.comment}
                  />
                  <img
                    src="/img/triangle-bk.png"
                    alt=""
                    className="w-3 absolute opacity-40 hover:opacity-70 right-2 bottom-2 transform rotate-90"
                    onClick={(e) => memoModifyRequest(week, student, e)}
                  />
                  <div className="w-full h-1/2 bg-white p-0.5 overflow-scroll focus:outline-none flex"></div>
                  <div className="absolute h-10 w-full top-0 box">
                    <StatusModal
                      student={student}
                      week={week}
                      setTrigger={setTrigger}
                      dataChangeTrigger={dataChangeTrigger}
                      currentComment={currentComment}
                      setComment={setComment}
                      setCommentInput={setCommentInput}
                      falsyStatusData={falsyStatusData}
                      setFalsyStatusData={setFalsyStatusData}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

const Attendances = () => {
  const [attendance, setAttendance] = useState([]);
  const [dataChangeTrigger, setTrigger] = useState(false);
  const [currentComment, setComment] = useState("");
  const [selectedComment, selectComment] = useState("");
  const [isCommentInputOn, setCommentInput] = useState(false);
  const [falsyStatusData, setFalsyStatusData] = useState({});
  const falsyStatus = useSelector((state) => state.attendance.falsyStatus);

  const dispatch = useDispatch();

  const handlingFalsyStatus = useCallback((statusInfo) => {
    dispatch(handleFalsyStatus(statusInfo));
  }, []);

  const inputRef = useRef();

  let boxes;

  //! attendance 상태 변경시 작동하는 트리거에 맞춰 전체 학생 및 출석 리스트를 불러옴
  useEffect(() => {
    axios
      .get("https://likelionustest.com/admins/att/lists?school=멋사대학교")
      .then((res) => res.data.attendance)
      .then((data) => {
        setAttendance(data);
        console.table(data);
        handleHoverEvent();
      });

    return () => {
      for (let i of boxes) {
        i.removeEventListener("mouseenter", (e) => {
          i.children[0].classList.remove("hidden");
        });
        i.removeEventListener("mouseleave", (e) => {
          i.children[0].classList.add("hidden");
        });
      }
    };
  }, [dataChangeTrigger]);

  //! 각 섹션 호버 시, 버튼 유무 / 차트 하단에 코멘트 유무 표시 이벤트 등록 함수
  const handleHoverEvent = () => {
    boxes = document.querySelectorAll(".box");
    for (let i of boxes) {
      i.addEventListener("mouseenter", (e) => {
        i.children[0].classList.remove("hidden");
        selectComment(i.textContent.split("checknon")[0]);
      });
      i.addEventListener("mouseleave", (e) => {
        i.children[0].classList.add("hidden");
        selectComment("");
      });
    }
  };

  //! 코멘트 인풋 핸들링 함수
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  //! 코멘트 상태에 따라 코멘트 상태와 코멘트 인풋 싱크를 맞춰줌
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = currentComment;
    }
  }, [currentComment]);

  const submitFalsyStatusWithComment = () => {
    const { week, student, status } = falsyStatus;
    const comment = currentComment;
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
        handlingFalsyStatus({});
      });
  };

  return (
    <Layout>
      <div className="w-full h-smallFull flex justify-center">
        <section className="w-full max-w-screen-xl h-full bg-blue-100 flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-10">Attendance</h1>
          <AttendanceChart
            attendance={attendance}
            setTrigger={setTrigger}
            dataChangeTrigger={dataChangeTrigger}
            currentComment={currentComment}
            setComment={setComment}
            setCommentInput={setCommentInput}
            falsyStatusData={falsyStatusData}
            setFalsyStatusData={setFalsyStatusData}
          />
          <p className="text-gray-800 h-10 mt-10">{selectedComment}</p>
          {Object.keys(falsyStatus).length ? (
            <>
              <section className="mt-6 w-120 h-8 flex bg-white shadow-md z-10">
                <input
                  type="text"
                  className="flex-1 h-full p-2"
                  placeholder="post comments here and post"
                  onChange={(e) => handleChange(e)}
                  ref={inputRef}
                />
                <button
                  className="p-1 bg-gray-100"
                  onClick={submitFalsyStatusWithComment}
                >
                  Submit
                </button>
              </section>
              <p className="text-red-600 text-sm">{`${
                falsyStatus.status === 2 ? "delay" : "non-checked"
              } selected!`}</p>
            </>
          ) : null}
        </section>
      </div>
    </Layout>
  );
};

export default Attendances;
