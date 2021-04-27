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
        <h1>{post.title}</h1>
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
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let token = window.localStorage.getItem("ac-token");
    axios
      .get(
        `https://likelionustest.com/bulletin/hwlist?school=멋사대학교&page=${router.query.page}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.bulletin);
        setPosts(res.data.bulletin);
        setLoading(false);
      });
  }, [router.query.page]);

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
            {isLoading ? (
              <div className="animate-rotate">LOADING</div>
            ) : (
              taskPosts.map((post) => <SingleTask post={post} key={post.id} />)
            )}
          </section>
          <button
            className="border border-red-500"
            onClick={() => router.push("/task/post")}
          >
            new post
          </button>
          <span>
            <span>{"<"}</span>
            <button
              className="cursor-pointer w-8"
              onClick={(e) => (router.query.page = e.target.textContent)}
            >
              1
            </button>
            <button
              className="cursor-pointer w-12"
              onClick={(e) => (router.query.page = e.target.textContent)}
            >
              2
            </button>
            <span>{">"}</span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
