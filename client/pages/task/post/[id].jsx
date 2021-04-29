import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import { handleModifyTaskInfo } from "../../../reducers/task";

// export async function getStaticPaths() {
//   const response = await axios(
//     "https://likelionustest.com/bulletin/hwlist?school=멋사대학교"
//   );
//   const postList = await response.data.bulletin;
//   console.log(postList);
//   return {
//     paths: postList.map((post) => {
//       return {
//         params: {
//           id: `${post.id}`,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const post = { no: "no" };
//   return {
//     props: post,
//   };
// }

export async function getServerSideProps(ctx) {
  console.log(ctx.query);
  return { props: { id: ctx.query.id } };
}

const Posts = (props) => {
  const dispatch = useDispatch();
  const [currentTaskPost, setPost] = useState({});
  const [sidePost, setSidePost] = useState({});
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { permission, school } = userInfo;

  const setModifyTaskInfo = useCallback((info) => {
    dispatch(handleModifyTaskInfo(info));
  }, []);

  const getCurrentTask = () => {
    // ! 개별 페이지 정보 받아와야 함
    // let id = router.asPath.slice(11);
    let token = window.localStorage.getItem("ac-token");
    console.log(`나는 쿼리다!!!!!!!!!!!!!!!!${router.query}`);
    console.log(router);
    axios
      .get(
        `https://likelionustest.com/bulletin/list/${props.id}?school=멋사대학교`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setPost(data.content);
        setSidePost(data.pageNumber);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // useEffect(() => {
  //   if (router.query.id) {

  //     getCurrentTask();
  //   }
  // }, [router.query]);

  useEffect(() => {
    console.log(props.id);
    getCurrentTask();
  }, [router.query.id]);

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

  const moveToModifyPage = () => {
    const { id, title, content } = currentTaskPost;
    setModifyTaskInfo({
      id: id,
      content: {
        title: title,
        content: content,
        submit_check: "0",
      },
    });
    router.push("/task/post/modify");
  };

  const movePage = (e) => {
    if (permission === "admin") {
      if (e.target.textContent === ">") {
        if (sidePost.next) {
          router.push(`/task/post/${String(sidePost.next)}`);
        } else {
          alert("There is no next page");
        }
      } else if (e.target.textContent === "<") {
        if (sidePost.prev) {
          router.push(`/task/post/${String(sidePost.prev)}`);
        } else {
          alert("There is no previous page");
        }
      }
    }
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
              <button
                className="absolute top-24 left-48 text-9xl"
                onClick={(e) => movePage(e)}
              >
                {"<"}
              </button>
              <button
                className="absolute top-24 right-48 text-9xl"
                onClick={(e) => movePage(e)}
              >
                {">"}
              </button>
            </div>
            <div className="relative bg-white shadow-xl w-full h-1/2 flex flex-col justify-evenly items-center">
              {permission === "student" && school.name === "멋사대학교" ? (
                <button
                  className="absolute bottom-10 left-10 rounded-lg border-4 bg-white p-2"
                  onClick={moveToModifyPage}
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
                <div className="absolute bottom-10 flex justify-between w-full">
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
                      currentTaskPost.submit_check === "0" ? "bg-gray-50" : ""
                    } p-2 focus:outline-none`}
                    onClick={() => modifyTaskStatus("0")}
                  >
                    Neutral
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

export default Posts;
