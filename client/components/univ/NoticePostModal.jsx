import axios from "axios";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNoticePostModal } from "../../reducers/notice";
import CommonEditor from "./CommonEditor";

const NoticePostModal = () => {
  const dispatch = useDispatch();
  const noticePostModal = useSelector((state) => state.notice.noticePostModal);
  const [inputValues, setValues] = useState({ title: "", content: "" });
  const [isWindow, setIsWindow] = useState(false);
  const windowRef = useRef();
  const handlingNoticePostModal = useCallback(() => {
    dispatch(handleNoticePostModal());
  }, []);

  const handleChange = (e) => {
    setValues({ ...inputValues, [e.target.placeholder]: e.target.value });
  };

  const postNewNotice = () => {
    let token = window.localStorage.getItem("ac-token");
    console.log(token);
    for (let i in inputValues) {
      if (!inputValues[i]) {
        throw new Error("Fill all sections..");
      }
    }
    axios
      .post("https://www.likelionustest.com/bulletin/write", inputValues, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.message);
        handlingNoticePostModal();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    if (windowRef.current) {
      setIsWindow(true);
    }
  }, []);

  return (
    <aside
      className={`fixed w-full z-20 top-28 ${
        noticePostModal ? "right-0" : "right-full"
      } flex transition-all duration-300`}
      ref={windowRef}
    >
      <aside className="w-1/2 h-screen bg-yellow-400">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => handleChange(e)}
        />
        {isWindow && <CommonEditor />}
        <input type="button" value="Post" onClick={postNewNotice} />
      </aside>
      <div className={`w-1/2 h-screen`} onClick={handlingNoticePostModal} />
    </aside>
  );
};

export default NoticePostModal;
