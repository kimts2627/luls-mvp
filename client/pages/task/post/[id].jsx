import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout";

const Posts = () => {
  const [currentTaskPost, setPost] = useState({});
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { permission, school } = userInfo;

  const getCurrentTask = () => {
    // ! 개별 페이지 정보 받아와야 함
    let id = router.asPath.slice(11);
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
    let id = router.asPath.slice(11);
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
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 301) {
          getCurrentTask();
        }
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
            <div className="absolute w-full h-1/4">
              <button className="absolute top-24 left-48 text-9xl">
                {"<"}
              </button>
              <button className="absolute top-24 right-48 text-9xl">
                {">"}
              </button>
            </div>
            <div className="relative bg-white shadow-xl w-full h-1/2 flex flex-col justify-evenly items-center">
              {permission === "student" && school.name === "멋사대학교" ? (
                <button
                  className="rounded-lg border-4 bg-white p-2"
                  onClick={undefined}
                >
                  Edit
                </button>
              ) : null}
              <h1 className="absolute left-5 top-5 text-xl">
                {currentTaskPost.id}
              </h1>
              <h1 className="absolute right-5 top-5 text-xl">
                {currentTaskPost.school}
              </h1>
              <h2 className="text-5xl Montserrat">{currentTaskPost.title}</h2>
              <h3>{currentTaskPost.content}</h3>
              {permission === "admin" ? (
                <div className="absolute bottom-10 flex justify-between w-60">
                  <button
                    className={`rounded-lg border-4 ${
                      currentTaskPost.submit_check === "pass"
                        ? "bg-green-500"
                        : ""
                    } p-2 focus:outline-none`}
                    onClick={() => modifyTaskStatus("pass")}
                  >
                    Pass
                  </button>
                  <button
                    className={`rounded-lg border-4 ${
                      currentTaskPost.submit_check === "fail"
                        ? "bg-red-500"
                        : ""
                    } p-2 focus:outline-none`}
                    onClick={() => modifyTaskStatus("fail")}
                  >
                    Fail
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

Posts.getInitailProps = async (ctx) => {
  console.log("aaa");
};

export default Posts;
