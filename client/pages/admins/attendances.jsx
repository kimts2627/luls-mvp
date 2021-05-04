import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/layout";
import StatusModal from "../../components/attendance/StatusModal";

const AttendanceChart = ({
  attendance,
  setTrigger,
  dataChangeTrigger,
  currentComment,
  setComment,
}) => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const statusRef = useRef();

  const setAttendanceStatusColor = (week) => {
    switch (week.status) {
      case 1:
        return "bg-green-300 text-green-700";
      case 2:
        return "bg-yellow-300 text-yellow-700";
      case 3:
        return "bg-red-300 text-red-800";
      default:
        return "bg-gray-50";
    }
  };

  const setAttendanceStatusComment = (week) => {
    switch (week.status) {
      case 1:
        return "Checked";
      case 2:
        return !week.comment ? "" : week.comment;
      case 3:
        return !week.comment ? "Non-checked" : week.comment;
      default:
        return "";
    }
  };

  return (
    <div className="relative w-3/4 h-150">
      <aside className="absolute z-10 h-full w-32 bg-blue-300 pt-28 flex flex-col items-center justify-start">
        {attendance.map((student) => (
          <h1
            key={student.l_name}
            className="h-28 border w-full flex justify-center items-center"
          >
            {`${student.l_name} ${student.f_name}`}
          </h1>
        ))}
      </aside>
      <div className="z-0 absolute w-full h-full bg-white shadow-md overflow-scroll">
        <aside className="h-full w-longFull bg-gray-50 absolute top-0 left-32">
          <div className="w-full h-28 bg-blue-300 flex">
            {weeks.map((week) => (
              <div
                className="border flex justify-center items-center h-full w-32"
                key={week}
              >{`Week-${week}`}</div>
            ))}
          </div>
          {attendance.map((student) => (
            <div key={student.id} className="w-full h-28 bg-gray-50 flex">
              {student.mem_att.map((week) => (
                <div
                  key={week.att.date}
                  className={`border w-32 h-full ${setAttendanceStatusColor(
                    week
                  )} cursor-pointer relative box flex justify-center items-center status text-xs`}
                >
                  {setAttendanceStatusComment(week)}
                  <StatusModal
                    student={student}
                    week={week}
                    setTrigger={setTrigger}
                    dataChangeTrigger={dataChangeTrigger}
                    currentComment={currentComment}
                    setComment={setComment}
                  />
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

  const inputRef = useRef();

  let boxes;

  useEffect(() => {
    axios
      .get("https://likelionustest.com/att/lists?school=멋사대학교")
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

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    inputRef.current.value = currentComment;
  }, [currentComment]);

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
          />
          <p className="text-gray-800 h-10 mt-10">{selectedComment}</p>
          <section className="mt-6 w-120 h-8 flex bg-white shadow-md z-10">
            <input
              type="text"
              className="flex-1 h-full p-2"
              placeholder="post comments here and select status button"
              onChange={(e) => handleChange(e)}
              ref={inputRef}
            />
          </section>
          <p className="text-red-600">
            Only non-check or delay can post comments
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Attendances;
