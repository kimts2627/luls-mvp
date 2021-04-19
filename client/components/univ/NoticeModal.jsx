import React from "react";
import { useSelector } from "react-redux";

const NoticeModal = ({ currentNotice }) => {
  const noticeModal = useSelector((state) => state.notice.noticeModal);
  return (
    <aside
      className={`fixed w-full z-20 top-28 ${
        noticeModal ? "left-0" : "left-full"
      } flex transition-all duration-500`}
    >
      <div className="blackback w-1/2 h-screen" />
      <aside className="w-1/2 h-screen bg-yellow-400">Hello React!</aside>
    </aside>
  );
};

export default NoticeModal;
