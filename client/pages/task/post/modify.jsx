import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout";

const ModifyTask = () => {
  const router = useRouter();
  const titleRef = useRef();
  const contentRef = useRef();
  const modifyTaskinfo = useSelector((state) => state.task.modifyTaskinfo);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [currentVal, setVal] = useState({
    id: "",
    content: {
      title: "",
      content: "",
    },
  });

  //! 마운트시 해당 게시글의 정보를 받아와서 인풋태그의 값으로 주입
  useEffect(() => {
    setVal({ ...modifyTaskinfo });
    titleRef.current.value = modifyTaskinfo.content.title;
    contentRef.current.value = modifyTaskinfo.content.content;
  }, []);

  //! 인풋태그의 값을 받아와 상태에 주입하는 함수
  const handleChange = (e) => {
    let modifiedContent = { ...currentVal.content };
    modifiedContent[e.target.placeholder] = e.target.value;
    setVal({ ...currentVal, content: { ...modifiedContent } });
  };

  //! 값이 주입된 함수
  const modifyRequest = () => {
    let token = window.localStorage.getItem("ac-token");
    if (!currentVal.content.title || !currentVal.content.content) {
      return alert("Fill all sections");
    }
    axios
      .post("https://likelionustest.com/bulletin/modify", currentVal, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(`제대로 받았따!${res.data}`);
        router.back();
      })
      .catch((err) => {
        console.log(`제대로 못받았따!${err.response}`);
        router.back();
      });
  };

  //! 태그 수정은 현재 보류중
  // const [tagList, setTagList] = useState([]);

  // useEffect(() => {
  //   let token = window.localStorage.getItem("ac-token");
  //   axios
  //     .get("https://likelionustest.com/bulletin/taglist", {
  //       withCredentials: true,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setTagList(res.data.tag);
  //     });
  // }, []);

  // const setTag = (thisTag) => {
  //   if (currentVal.tag.length !== 0) {
  //     for (let i of currentVal.tag) {
  //       if (i.id === thisTag.id) {
  //         console.log("tag exist");
  //         return;
  //       }
  //     }
  //   }
  //   console.log(currentVal);
  //   let copyVal = { ...currentVal };
  //   copyVal.tag.push(thisTag.id);
  //   setVal(copyVal);
  // };

  return (
    <Layout>
      <div className="w-full mt-28 h-staticFull flex justify-center items-center">
        <section className="w-full max-w-screen-xl h-full bg-blue-50 rounded-lg flex items-center justify-center">
          <div className="w-1/2 h-1/2 relative flex flex-col justify-evenly">
            {/* <div>
              {tagList.map((thisTag) => (
                <button
                  key={thisTag.id}
                  className="border-2 rounded-lg"
                  onClick={() => setTag(thisTag)}
                >
                  {thisTag.name}
                </button>
              ))}
            </div> */}
            <input
              type="text"
              placeholder="title"
              onChange={(e) => handleChange(e)}
              ref={titleRef}
            />
            <input
              type="text"
              placeholder="content"
              className="h-44"
              onChange={(e) => handleChange(e)}
              ref={contentRef}
            />
            <button className="bg-gray-200" onClick={modifyRequest}>
              MODIFY!!
            </button>
            <button
              className="absolute bottom-0 bg-gray-200"
              onClick={() => router.back()}
            >
              Back to list
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ModifyTask;
