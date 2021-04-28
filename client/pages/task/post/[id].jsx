import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout";

const Posts = () => {
  const [currentTaskPost, setPost] = useState({});
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const getCurrentTask = () => {
    // ! 개별 페이지 정보 받아와야 함
    let id = router.asPath.slice(10);
    let token = window.localStorage.getItem("ac-token");
    console.log(id);
    axios
      .get(`https://likelionustest.com/bulletin/list/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setPost(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getCurrentTask();
  }, []);

  const modifyTaskStatus = (status) => {
    let id = router.asPath.slice(10);
    let token = window.localStorage.getItem("ac-token");

    axios
      .post(
        `https://likelionustest.com/bulletin/submit`,
        {
          id: id,
          submit_check: status,
        },
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        getCurrentTask();
      });
  };

  return (
    <Layout>
      <div className="w-full h-full mt-28 flex items-center justify-center">
        {!currentTaskPost ? (
          <div className="w-full h-full flex items-center justify-center">
            LOADING
          </div>
        ) : (
          <div className="w-1/2 h-screen text-4xl flex flex-col justify-center items-center">
            <div className="relative bg-white shadow-xl w-full h-1/2 flex flex-col justify-evenly items-center">
              <h1 className="absolute left-5 top-5">{currentTaskPost.id}</h1>
              <h1 className="absolute right-5 top-5">
                {currentTaskPost.school}
              </h1>
              <h2 className="text-2xl">{currentTaskPost.title}</h2>
              <h3>{currentTaskPost.content}</h3>
              <div className="absolute bottom-10 flex justify-between w-60">
                <button
                  className={`rounded-lg border-4 ${
                    currentTaskPost.submit_check === "pass"
                      ? "border-green-500"
                      : ""
                  } p-2 bg-gray-100`}
                  onClick={() => modifyTaskStatus("pass")}
                >
                  Pass
                </button>
                <button
                  className={`rounded-lg border-4 ${
                    currentTaskPost.submit_check === "fail"
                      ? "border-red-500"
                      : ""
                  } p-2 bg-gray-100`}
                  onClick={() => modifyTaskStatus("fail")}
                >
                  Fail
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Posts;
