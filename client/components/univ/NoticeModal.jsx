import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNoticeModal } from "../../reducers/notice";

const NoticeModal = ({ currentNotice }) => {
  const dispatch = useDispatch();
  const noticeModal = useSelector((state) => state.notice.noticeModal);

  const handlingNoticeModal = useCallback(() => {
    dispatch(handleNoticeModal());
  }, []);

  return (
    <aside
      className={`fixed w-full z-20 top-28 ${
        noticeModal ? "left-0" : "left-full"
      } flex transition-all duration-300`}
    >
      <div className={`w-1/2 h-screen`} onClick={handlingNoticeModal} />
      <aside className="w-1/2 h-screen bg-yellow-400">
        {currentNotice ? currentNotice.content : "no data"}
      </aside>
    </aside>
  );
};

export default NoticeModal;
