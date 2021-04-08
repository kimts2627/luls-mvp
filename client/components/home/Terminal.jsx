import React, { useEffect, useState } from "react";
import axios from "axios";

const Terminal = () => {
  const [test, handleTest] = useState(null);

  useEffect(() => {
    axios.get("https://www.likelionustest.com/users/test").then((data) => {
      handleTest(data.message);
    });
  }, []);

  return (
    <span className="absolute left-36 top-36 bg-black z-10 shadow-xl rounded-xl w-120 h-72 flex items-center flex-col animate-none">
      <div className="w-full h-6 bg-gray-800 rounded-t-xl flex items-center">
        <ul className="w-16 h-full flex items-center justify-evenly">
          <li className="w-3 h-3 bg-red-400 rounded-full"></li>
          <li className="w-3 h-3 bg-yellow-400 rounded-full"></li>
          <li className="w-3 h-3 bg-green-400 rounded-full"></li>
        </ul>
        <span className="text-gray-400 text-sm ml-20">
          user@LikeLion~/hack/yourlife
        </span>
      </div>
      <div className="absolute left-3 top-9 flex items-center justify-">
        <h1 className="D2coding text-xl text-white ml-3 overflow-hidden">
          {test}
        </h1>
        <span className="w-2 h-5 border animate-blink"></span>
      </div>
    </span>
  );
};

export default Terminal;
