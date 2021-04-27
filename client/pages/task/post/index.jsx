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
      <div className="w-full h-full fixed top-0 flex justify-center items-center blackback">
        <section className="relative w-120 h-150 mt-28 bg-white rounded-lg">
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
            className="absolute bottom-0 bg-gray-200 right-1/2"
            onClick={() => router.back()}
          >
            Back to list
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default PostTask;
