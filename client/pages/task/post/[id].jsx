import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout";

const Posts = () => {
  const currentTaskPost = useSelector((state) => state.task.currentTaskPost);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // ! 개별 페이지 정보 받아와야 함
    // axios.get('https://likelionustest.com/bulletin/', {
    // })
    // .then(res => res.data)
    // .then()
  }, []);

  const returnButtonColor = () => {
    switch (currentTaskPost.submit_check) {
      case "1":
        return "bg-red-100";
      case "2":
        return "bg-green-100";
      default:
        return "bg-white";
    }
  };

  return (
    <Layout>
      <div className="w-full h-full mt-28 flex items-center justify-center">
        {!currentTaskPost ? (
          <div className="animate-rotate">LOADING</div>
        ) : (
          <div className="w-1/2 h-screen text-4xl flex flex-col justify-center items-center">
            <div className="relative bg-red-50 w-full h-1/2 flex flex-col justify-evenly items-center">
              <h1 className="absolute left-5 top-5">{currentTaskPost.id}</h1>
              <h1 className="absolute right-5 top-5">
                {currentTaskPost.school}
              </h1>
              <h2 className="text-2xl">{currentTaskPost.title}</h2>
              <h3>{currentTaskPost.content}</h3>
              <div>
                <button className={`rounded-lg ${returnButtonColor}`}>
                  Pass
                </button>
                <button>noPass</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Posts;
