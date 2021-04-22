import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNoticeModal } from "../../reducers/notice";

const NoticeModal = ({ currentNotice }) => {
  const dispatch = useDispatch();
  const noticeModal = useSelector((state) => state.notice.noticeModal);

  const handlingNoticeModal = useCallback(() => {
    dispatch(handleNoticeModal());
  }, []);

  useEffect(() => {
    console.log(currentNotice);
  }, []);

  return (
    <aside className=" relative w-120 h-150 bg-white rounded-md shadow-md mt-28 p-8">
      <h1 className="text-5xl w-full mb-4 overflow-hidden">
        {currentNotice && currentNotice.title}
      </h1>
      <div className="border-b-2 border-yellow-500" />
      <div className="w-full text-right flex justify-end">
        <h2>{currentNotice && currentNotice.school}</h2>
        <h2 className="ml-10">{currentNotice && currentNotice.createdAt}</h2>
      </div>
      <p className="w-full h-120 shadow-inner bg-gray-50 mt-24 p-4">
        {currentNotice && currentNotice.content}
      </p>
      <img
        src="/img/x.png"
        alt=""
        className="absolute top-4 right-4 w-6 cursor-pointer"
        onClick={handlingNoticeModal}
      />
    </aside>
  );
};

export default NoticeModal;
