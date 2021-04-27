import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const currentTaskPost = useSelector((state) => state.task.currentTaskPost);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // axios.get('https://likelionustest.com/bulletin/', {
    // })
    // .then(res => res.data)
    // .then()
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!currentTaskPost ? (
        <div className="animate-rotate">LOADING</div>
      ) : (
        <div className="w-1/2 h-screen text-4xl flex flex-col justify-center items-center">
          <div className="bg-red-50 w-full h-1/2 flex flex-col justify-evenly items-center">
            <h1>{`Content Id Num is ${currentTaskPost.id} and Author is ${currentTaskPost.name}`}</h1>
            <h2>{currentTaskPost.title}</h2>
            <h3>{currentTaskPost.content}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
