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

  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleChange = (e) => {
    setVal({ ...currentVal, [e.target.placeholder]: e.target.value });
  };

  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    let token = window.localStorage.getItem("ac-token");
    axios
      .get("https://likelionustest.com/bulletin/taglist", {
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

  return (
    <Layout>
      <div className="w-full mt-28 h-staticFull flex justify-center items-center">
        <section className="w-full max-w-screen-xl h-full bg-blue-50 rounded-lg flex items-center justify-center">
          <div className="w-1/2 h-1/2 relative flex flex-col justify-evenly">
            <div>
              {tagList.map((tag) => (
                <button
                  key={tag.id}
                  className="border-2 rounded-lg"
                  onClick={() => {
                    for (let i of currentVal.tag) {
                      if (i.id === tag.id) {
                        return;
                      }
                    }
                    setVal({ ...currentVal, tag: currentVal.tag.push(tag.id) });
                  }}
                >
                  {tag.name}
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
