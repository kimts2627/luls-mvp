import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNoticePostModal } from "../../reducers/notice";

const NoticePostModal = () => {
  const dispatch = useDispatch();
  const noticePostModal = useSelector((state) => state.notice.noticePostModal);
  const [inputValues, setValues] = useState({ title: "", content: "" });

  const handlingNoticePostModal = useCallback(() => {
    dispatch(handleNoticePostModal());
  }, []);

  const handleChange = (e) => {
    setValues({ ...inputValues, [e.target.placeholder]: e.target.value });
  };

  const postNewNotice = () => {
    const token = window.localStorage.getItem("ac_token");
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

  return (
    <aside
      className={`fixed w-full z-20 top-28 ${
        noticePostModal ? "right-0" : "right-full"
      } flex transition-all duration-300`}
    >
      <aside className="w-1/2 h-screen bg-yellow-400">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="content"
          onChange={(e) => handleChange(e)}
          className="w-80 h-80"
        />
        <input type="button" value="Post" onClick={postNewNotice} />
      </aside>
      <div className={`w-1/2 h-screen`} onClick={handlingNoticePostModal} />
    </aside>
  );
};

export default NoticePostModal;
