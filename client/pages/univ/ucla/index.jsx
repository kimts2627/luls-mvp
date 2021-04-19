import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import NoticeModal from "../../../components/univ/NoticeModal";
import {
  handleNotice,
  handleNoticeModal,
  handleCurrentNotice,
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
      className="w-full h-12 border-b border-gray-300 flex cursor-pointer"
      onClick={openNoticeModal}
    >
      <span className="w-32 flex items-center">{notice.school}</span>
      <span className="flex-1 flex items-center">{notice.title}</span>
      <span className="w-40 flex items-center">
        {notice.createdAt.slice(0, 10)}
      </span>
    </div>
  );
};

const UclaHome = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notice.notices);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const currentNotice = useSelector((state) => state.notice.currentNotice);
  const noticeModal = useSelector((state) => state.notice.noticeModal);

  const handlingNotice = useCallback((notices) => {
    dispatch(handleNotice(notices));
  }, []);

  useEffect(() => {
    axios
      .get("https://www.likelionustest.com/bulletin/list?school=멋사대학교", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        handlingNotice(data);
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
          <section className="h-120 bg-red-50 w-full flex items-center justify-center text-8xl mt-10">
            Who we are?
          </section>
          <section className="h-2/3 w-full p-5">
            <h1 className="text-3xl mb-14 Montserrat text-yellow-500">
              Notice.
            </h1>
            <article className="w-full h-120 max-h-120 shadow-md rounded-md">
              <header className="w-full h-12 bg-gray-100 flex items-center p-2 shadow-md">
                <h2 className="w-32 border-r border-gray-500 mr-2">Univ.</h2>
                <h2 className="flex-1 border-r border-gray-500 mr-2">Title.</h2>
                <h2 className="w-36">Date.</h2>
              </header>
              <div className="w-full p-1">
                {notices
                  ? notices.map((notice) => (
                      <SingleNotice key={notice.id} notice={notice} />
                    ))
                  : null}
              </div>
            </article>
            {userInfo !== null ? (
              userInfo.permission === "admin" ? (
                <button className="absolute bottom-0 right-6 bg-yellow-400 rounded-md p-2 cursor-pointer mb-10">
                  New Notice
                </button>
              ) : null
            ) : null}
          </section>
        </main>
      </div>
      {noticeModal ? (
        <div className="blackback fixed top-0 w-full h-full z-10" />
      ) : null}
      <NoticeModal currentNotice={currentNotice} />
    </Layout>
  );
};

export default UclaHome;
