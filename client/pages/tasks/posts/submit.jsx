import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout";

const PostTask = () => {
  const router = useRouter();
  const [currentVal, setVal] = useState({
    title: "",
    content: "",
    tag: [],
  });

  const [tagList, setTagList] = useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);

  //! 입력값을 상태에 주입하는 함수
  const handleChange = (e) => {
    setVal({ ...currentVal, [e.target.placeholder]: e.target.value });
  };

  //! 마운트 시 전체 태그목록 불러옴
  useEffect(() => {
    let token = window.localStorage.getItem("ac-token");
    axios
      .get("https://likelionustest.com/bulletin/taglists", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTagList(res.data.tag);
      });
  }, []);

  //! 주입된 값과 태그들을 바탕으로 CREATE 요청하는 함수
  const submitTaskPost = () => {
    let token = window.localStorage.getItem("ac-token");
    for (let i in currentVal) {
      if (!currentVal[i]) {
        throw new Error("Fill all sections");
      }
    }
    axios
      .post("https://likelionustest.com/bulletin/write", currentVal, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        router.back();
      });
  };

  //! 게시글에 태그들을 선택하여 상태에 주입하는 함수
  const setTag = (thisTag) => {
    if (currentVal.tag.length !== 0) {
      for (let i of currentVal.tag) {
        if (i.id === thisTag.id) {
          console.log("tag exist");
          return;
        }
      }
    }
    console.log(currentVal);
    let copyVal = { ...currentVal };
    copyVal.tag.push(thisTag.id);
    setVal(copyVal);
  };

  return (
    <Layout>
      <div className="w-full mt-28 h-staticFull flex justify-center items-center">
        <section className="w-full max-w-screen-xl h-full bg-blue-50 rounded-lg flex items-center justify-center">
          <div className="w-1/2 h-1/2 relative flex flex-col justify-evenly">
            <div>
              {tagList.map((thisTag) => (
                <button
                  key={thisTag.id}
                  className="border-2 rounded-lg"
                  onClick={() => setTag(thisTag)}
                >
                  {thisTag.name}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="title"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="content"
              className="h-44"
              onChange={(e) => handleChange(e)}
            />
            <button className="bg-gray-200" onClick={submitTaskPost}>
              POST NEW!
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

export default PostTask;
