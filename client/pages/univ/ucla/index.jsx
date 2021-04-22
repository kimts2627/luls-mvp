import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import NoticeModal from "../../../components/univ/NoticeModal";
import NoticePostModal from "../../../components/univ/NoticePostModal";
import {
  handleNotice,
  handleNoticeModal,
  handleCurrentNotice,
  handleNoticePostModal,
} from "../../../reducers/notice";

const SingleNotice = ({ notice }) => {
  const dispatch = useDispatch();
  const noticeModal = useSelector((state) => state.notice.noticeModal);

  const handlingNoticeModal = useCallback(() => {
    dispatch(handleNoticeModal());
  }, []);

  const setCurrentNotice = useCallback((currentNotice) => {
    dispatch(handleCurrentNotice(currentNotice));
  }, []);

  const openNoticeModal = () => {
    if (noticeModal) {
      return;
    } else {
      setCurrentNotice(notice);
      handlingNoticeModal();
    }
  };

  return (
    <div
      className={`w-full h-12 border-b border-gray-300 flex cursor-pointer ${
        notice.school === "admin" ? "bg-yellow-50" : null
      }`}
      onClick={openNoticeModal}
    >
      <span className="w-32 flex items-center pl-2">{notice.school}</span>
      <span className="flex-1 flex items-center pl-2">{notice.title}</span>
      <span className="w-40 flex items-center pl-3">
        {notice.createdAt.slice(0, 10)}
      </span>
    </div>
  );
};

const UclaHome = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notice.notices) || [
    {
      id: 0,
      school: "admin",
      title: "local",
      content: "testing",
      createdAt: "00:00",
    },
  ];
  const userInfo = useSelector((state) => state.auth.userInfo);
  const currentNotice = useSelector((state) => state.notice.currentNotice);
  const noticeModal = useSelector((state) => state.notice.noticeModal);
  const noticePostModal = useSelector((state) => state.notice.noticePostModal);

  const handlingNotice = useCallback((notices) => {
    dispatch(handleNotice(notices));
  }, []);

  const handlingNoticePostModal = useCallback(() => {
    dispatch(handleNoticePostModal());
  }, []);

  const handlingNoticeModal = useCallback(() => {
    dispatch(handleNoticeModal());
  }, []);

  useEffect(() => {
    axios
      .get("https://www.likelionustest.com/bulletin/list?school=멋사대학교", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        handlingNotice(data.bulletin);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Layout>
      <div className="h-staticFull mt-28 w-full flex flex-col items-center">
        <header className="relative w-full h-1/3 overflow-hidden flex items-center">
          <img src="/img/ucla-campus.jpeg" alt="" className="w-full z-0" />
          <div className="absolute top-0 bg-blue-400 opacity-40 w-full h-full z-10" />
        </header>
        <div className="absolute h-120 z-10 top-72">
          <img src="/img/logo/ucla.png" alt="" className="h-full" />
        </div>
        <main className="relative w-full max-w-screen-xl h-full">
          <section className="h-120 w-full flex items-center justify-center text-4xl text-center mt-10 flex flex-col">
            <div className="w-full h-1/3"></div>
            nisi ut aliquip ex ea commodo consequat.<br></br>
            Lorem ipsum dolor sit amet,
            <span className="text-yellow-500">consectetur adipiscing</span>elit
            nisi ut aliquip ex ea commodo consequat.<br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </section>
          <section className="h-2/3 w-full p-5">
            <h1 className="text-3xl mb-14 Montserrat text-yellow-500">
              Notice.
            </h1>
            <article className="w-full h-120 max-h-120 shadow-md rounded-md flex flex-col">
              <header className="w-full h-12 bg-gray-100 flex items-center p-2 shadow-md">
                <h2 className="w-32 border-r border-gray-500 mr-2">Univ.</h2>
                <h2 className="flex-1 border-r border-gray-500 mr-2">Title.</h2>
                <h2 className="w-36">Date.</h2>
              </header>
              <div className="w-full p-1 overflow-y-scroll">
                {notices.map((notice) => (
                  <SingleNotice key={notice.id} notice={notice} />
                ))}
              </div>
            </article>
            {userInfo !== null ? (
              userInfo.permission === "admin" ? (
                <button
                  className="absolute bottom-0 right-6 bg-yellow-400 rounded-md p-2 cursor-pointer mb-10"
                  onClick={handlingNoticePostModal}
                >
                  New Notice
                </button>
              ) : null
            ) : null}
          </section>
        </main>
      </div>
      {noticeModal || noticePostModal ? (
        <div className="blackback fixed top-0 w-full h-full z-10" />
      ) : null}
      {noticeModal ? (
        <div
          className="fixed top-0 w-full h-full z-20 flex justify-center items-center"
          onClick={handlingNoticeModal}
        >
          <NoticeModal currentNotice={currentNotice} />
        </div>
      ) : null}
      {noticePostModal ? (
        <div>
          <NoticePostModal />
        </div>
      ) : null}
    </Layout>
  );
};

export default UclaHome;
