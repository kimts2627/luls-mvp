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
  const [currentVal, setVal] = useState({
    title: "",
    content: "",
    id: "",
  });

  useEffect(() => {
    setVal({ ...modifyTaskinfo });
    titleRef.current.value = modifyTaskinfo.title;
    contentRef.current.value = modifyTaskinfo.content;
  }, []);

  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleChange = (e) => {
    setVal({ ...currentVal, [e.target.placeholder]: e.target.value });
  };

  const modifyRequest = () => {
    let token = window.localStorage.getItem("ac-token");
    axios
      .post("https://likelionustest.com/bulletin/modify", currentVal, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        router.back();
      })
      .catch((err) => {
        console.log(err.response);
        router.back();
      });
  };

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
