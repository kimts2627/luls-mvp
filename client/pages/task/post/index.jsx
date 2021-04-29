import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "../../../components/layout";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleCurrentTask } from "../../../reducers/task";
import axios from "axios";
import postcssConfig from "../../../postcss.config";

const SingleTask = ({ post }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const returnButtonColor = () => {
    switch (post.submit_check) {
      case "fail":
        return "bg-red-100";
      case "pass":
        return "bg-green-100";
      default:
        return "bg-white";
    }
  };

  return (
    <Link href={`/task/post/${post.id}`} as={`/task/post/${post.id}`}>
      <a>
        <div
          className={`w-full h-16 shadow-md border mb-2 cursor-pointer flex justify-evenly ${returnButtonColor()}`}
        >
          <h1>
            {post.bulletin !== null
              ? post.bulletin.Members_Id.f_name +
                post.bulletin.Members_Id.l_name
              : "null"}
          </h1>
          <h1>{post.title}</h1>
          <h2>{post.createdAt}</h2>
        </div>
      </a>
    </Link>
  );
};

const Tasks = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { permission, f_name, l_name } = userInfo;
  const name = `${f_name} ${l_name}`;

  const [taskPosts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [postsNum, setPostsNum] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentTags, setCurrentTags] = useState([]);

  const router = useRouter();
  const numRef = useRef();

  useEffect(() => {
    let token = window.localStorage.getItem("ac-token");
    axios
      .get(
        `https://likelionustest.com/bulletin/hwlist?school=멋사대학교&page=${router.query.page}&tag=${router.query.tag}`,
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
        let postsArr = [];
        for (let i = 0; i < Math.ceil(res.data.page / 10); i++) {
          if (postsArr.length === 0) {
            postsArr.push(1);
          } else {
            postsArr.push(postsArr[postsArr.length - 1] + 1);
          }
        }
        setPostsNum(postsArr);
        setTags(res.data.tag);
        setLoading(false);
        if (numRef.current.textContent === Number(router.query.page)) {
          numRef.current.style.borderBottom = "1px solid black";
        } else {
          numRef.current.style.borderBottom = "none";
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [router.query]);

  // ################## handling Tags ###############################

  //! 더미 태그
  let dummyTags = [
    { id: 1, name: "HW-1" },
    { id: 2, name: "HW-2" },
    { id: 3, name: "HW-3" },
    { id: 4, name: "HW-4" },
    { id: 5, name: "HW-5" },
    { id: 6, name: "HW-6" },
    { id: 7, name: "HW-7" },
    { id: 8, name: "HW-8" },
    { id: 9, name: "HW-9" },
    { id: 10, name: "HW-10" },
  ];

  //! 선택된 태그들 currentTags 상태에 배열로 저장 및 삭제
  const collectTags = (tag) => {
    for (let i = 0; i < currentTags.length; i++) {
      if (currentTags[i].id === tag.id) {
        setCurrentTags(
          currentTags.slice(0, i).concat(currentTags.slice(i + 1))
        );
        return;
      }
    }
    setCurrentTags([...currentTags, tag]);
  };

  //! 선택된 태그들 sorting 하여 보여주기
  const showCollectedTags = () => {
    let result = "";
    let newCurrentTags = [...currentTags];
    newCurrentTags = newCurrentTags.sort((a, b) => Number(a.id) - Number(b.id));
    for (let i of newCurrentTags) {
      result = result + i.name + ", ";
    }
    return result.slice(0, result.length - 2);
  };

  //! 선택된 태그 컬러변경
  const setTagsColor = (tag) => {
    for (let i = 0; i < currentTags.length; i++) {
      if (currentTags[i].id === tag.id) {
        return "bg-red-300";
      }
    }
    return "bg-gray-100";
  };

  const reqestTagSortedList = () => {
    let uri = "/task/post?page=1";
    let query = currentTags.map((tag) => tag.id).join("&tag=");
    router.push(uri + "&tag=" + query);
  };

  // ############################################################

  return (
    <Layout>
      <div className="w-full h-staticFull flex items-center justify-center mt-28">
        <div className="relative w-full max-w-screen-lg h-full bg-red-100 p-16">
          <span className="absolute top-5 right-5">
            <h2 className="text-xl">{`Welcome, ${permission} ${name}!`}</h2>
          </span>
          <div className="text-center mb-8">
            <h1 className="text-5xl">Task List</h1>
            <p className="text-xl">Meot-sa univ.</p>
          </div>
          <div className="flex flex-col w-full h-20 bg-white mb-2 shadow-inner p-2 border">
            <div className="flex">
              <h1 className="Montserrat text-lg">Tags</h1>
              {tags.map((tag) => (
                <div
                  key={tag.name}
                  className={`mx-2 h-5 cursor-pointer text-sm ${setTagsColor(
                    tag
                  )} rounded-md`}
                  onClick={() => collectTags(tag)}
                >
                  {tag.name}
                </div>
              ))}
            </div>
            <div className="h-1/2 flex">
              <section className="bg-white shadow-inner w-full h-full border p-2 flex items-center flex-1">
                {showCollectedTags()}
              </section>
              <button
                className="w-20 rounded-md shadow-inner ml-3 bg-red-50"
                onClick={reqestTagSortedList}
              >
                Search!
              </button>
            </div>
          </div>
          <section className="bg-white w-full h-150 p-4 pt-7 shadow-inner border">
            {isLoading ? (
              <div className="">LOADING</div>
            ) : (
              taskPosts.map((post) => <SingleTask post={post} key={post.id} />)
            )}
          </section>
          {permission === "student" ? (
            <button
              className="border border-red-500"
              onClick={() => router.push("/task/post/submit")}
            >
              new post
            </button>
          ) : null}
          <span className="absolute w-full left-0 mt-6 flex justify-center">
            <span
              onClick={() =>
                router.push(
                  router.query.page === "1"
                    ? `/task/post?page=1`
                    : `/task/post?page=${Number(router.query.page) - 1}`
                )
              }
              className="cursor-pointer"
            >
              {"<"}
            </span>
            {postsNum.map((page) => (
              <button
                key={page}
                className="cursor-pointer w-8"
                ref={numRef}
                onClick={() => router.push(`/task/post?page=${page}`)}
              >
                {page}
              </button>
            ))}
            <span
              onClick={() =>
                router.push(
                  router.query.page === String(postsNum[postsNum.length - 1])
                    ? `/task/post?page=${postsNum[postsNum.length - 1]}`
                    : `/task/post?page=${Number(router.query.page) + 1}`
                )
              }
              className="cursor-pointer"
            >
              {">"}
            </span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
