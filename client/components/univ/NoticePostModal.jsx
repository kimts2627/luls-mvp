import axios from "axios";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNoticePostModal } from "../../reducers/notice";
// import CommonEditor from "./CommonEditor";

const NoticePostModal = () => {
  const dispatch = useDispatch();
  const noticePostModal = useSelector((state) => state.notice.noticePostModal);
  const [inputValues, setValues] = useState({ title: "", content: "" });
  // const [isWindow, setIsWindow] = useState(false);
  // const windowRef = useRef();
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

  const ignoreBubbling = (e) => {
    e.stopPropagation();
  };

  // useEffect(() => {
  //   if (windowRef.current) {
  //     setIsWindow(true);
  //   }
  // }, []);

  return (
    <aside
      className="relative w-120 h-150 bg-white rounded-md shadow-md mt-28 p-8"
      onClick={(e) => ignoreBubbling(e)}
    >
      <div className="w-full h-full bg-white">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => handleChange(e)}
          className="w-full h-16 text-4xl border-b-2 border-yellow-500 p-4"
        />
        {/* {isWindow && <CommonEditor />} */}
        <input
          type="text"
          placeholder="content"
          onChange={(e) => handleChange(e)}
          className="w-full bg-gray-50 shadow-inner h-120 text-xl mt-10 mb-10 p-4 align-text-top"
        />
        <input
          type="button"
          value="Post"
          onClick={postNewNotice}
          className="relative left-1/2 w-32 -ml-16 rounded-md h-10 bg-yellow-400"
        />
      </div>
      <img
        src="/img/x.png"
        alt=""
        className="absolute top-4 right-4 w-6 cursor-pointer"
        onClick={handlingNoticePostModal}
      />
    </aside>
  );
};

export default NoticePostModal;
