import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleCurrentTask } from "../../reducers/task";
import axios from "axios";

const SingleTask = ({ post }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handlingCurrentTask = useCallback((post) => {
    dispatch(handleCurrentTask(post));
  }, []);

  return (
    <Link href={`/task/post/${post.id}`}>
      <div
        className="w-full h-16 bg-white shadow-md border mb-2 cursor-pointer flex justify-evenly"
        onClick={() => handlingCurrentTask(post)}
      >
        <h1>{post.name}</h1>
        <h2>{post.createdAt}</h2>
        <h2>{post.content}</h2>
      </div>
    </Link>
  );
};

const Tasks = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { permission, F_Name, L_Name } = userInfo;
  const name = `${F_Name} ${L_Name}`;
  const [taskPosts, setPosts] = useState([]);

  const posts = [
    {
      id: 1,
      name: "kimtaesu",
      title: "1",
      content: "testing...",
      createdAt: "2020-20-20",
    },
    {
      id: 2,
      name: "parktaesu",
      title: "2",
      content: "testing!!",
      createdAt: "2020-20-20",
    },
    {
      id: 3,
      name: "ohtaesu",
      title: "3",
      content: "testing333",
      createdAt: "2020-23-20",
    },
    {
      id: 4,
      name: "shimtaesu",
      title: "4",
      content: "testing44",
      createdAt: "2020-44-20",
    },
    {
      id: 5,
      name: "jungtaesu",
      title: "5",
      content: "testing55",
      createdAt: "2020-55-20",
    },
  ];

  useEffect(() => {
    let token = window.localStorage.getItem("ac-token");
    axios
      .get("https://likelionustest.com/bulletin/hwlist", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      });
  }, []);

  return (
    <Layout>
      <div className="w-full h-staticFull flex items-center justify-center mt-28">
        <div className="relative w-full max-w-screen-lg h-full bg-red-100 p-16">
          <span className="absolute top-5 right-5">
            <h2 className="text-xl">{`Welcome, ${permission} ${name}!`}</h2>
          </span>
          <div className="text-center mb-16">
            <h1 className="text-5xl">Task List</h1>
            <p className="text-xl">Meot-sa univ.</p>
          </div>
          <section className="bg-white w-full h-150 p-4 pt-7">
            {posts.map((post) => (
              <SingleTask post={post} key={post.id} />
            ))}
          </section>
          <button className="border border-red-500">new post</button>
          <span>
            <span>{"<"}</span>
            {}
            <span>{">"}</span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
