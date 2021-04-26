import React from "react";
import { useSelector } from "react-redux";

const PostTask = () => {
  const currentTaskPost = useSelector((state) => state.task.currentTaskPost);
  const { id, title, content, name } = currentTaskPost;

  return (
    <div className="w-full h-full flex items-center justify-center">
      {currentTaskPost ? (
        <div className="animate-rotate">LOADING</div>
      ) : (
        <div>
          <h1>{`content id num is ${id} and writer is ${name}`}</h1>
          <h2>{title}</h2>
          <h3>{content}</h3>
        </div>
      )}
    </div>
  );
};

export default PostTask;
