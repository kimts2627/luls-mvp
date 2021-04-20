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
    <aside className="w-120 h-150 bg-white rounded-md shadow-md">testing</aside>
  );
};

export default NoticeModal;
