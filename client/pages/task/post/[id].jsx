import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const currentTaskPost = useSelector((state) => state.task.currentTaskPost);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!currentTaskPost ? (
        <div className="animate-rotate">LOADING</div>
      ) : (
        <div className="w-1/2 h-1/2 text-4xl flex flex-col justify-center items-center">
          <h1>{`content id num is ${currentTaskPost.id} and writer is ${currentTaskPost.name}`}</h1>
          <h2>{currentTaskPost.title}</h2>
          <h3>{currentTaskPost.content}</h3>
        </div>
      )}
    </div>
  );
};

export default Posts;
