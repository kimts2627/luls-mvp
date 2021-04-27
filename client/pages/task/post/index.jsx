import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout";

const PostTask = () => {
  const router = useRouter();
  const [currentVal, setVal] = useState({
    title: "",
    content: "",
    name: "",
    school: "",
  });

  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleChange = (e) => {
    setVal({ ...currentVal, [e.target.placeholder]: e.target.value });
  };
  const { f_name, l_name, school } = userInfo;

  useEffect(() => {
    setVal({
      ...currentVal,
      name: f_name + "" + l_name,
      school: school ? school.name : "no",
    });
  }, []);

  return (
    <Layout>
      <div className="w-full mt-28 h-staticFull flex justify-center items-center">
        <section className="w-full max-w-screen-xl h-full bg-blue-50 rounded-lg flex items-center justify-center">
          <div className="w-1/2 h-1/2 relative flex flex-col justify-evenly">
            <input
              type="text"
              placeholder="title"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="content"
              onChange={(e) => handleChange(e)}
            />
            <button className="bg-gray-200">POST NEW!</button>
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
