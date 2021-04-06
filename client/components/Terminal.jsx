import React from "react";

const Terminal = () => {
  return (
    <span className="absolute left-32 top-32 bg-black z-10 shadow-lg rounded-xl w-96 h-60 flex items-center flex-col animate-none">
      <div className="w-full h-6 bg-gray-800 rounded-t-xl">
        <ul className="w-16 h-full flex items-center justify-evenly">
          <li className="w-3 h-3 bg-red-400 rounded-full"></li>
          <li className="w-3 h-3 bg-yellow-400 rounded-full"></li>
          <li className="w-3 h-3 bg-green-400 rounded-full"></li>
        </ul>
      </div>
      <div className="absolute left-3 top-9 flex items-center justify-">
        <span className="w-2 h-5 border"></span>
        <h1 className="D2coding text-xl text-white ml-3">Hack your life!</h1>
      </div>
    </span>
  );
};

export default Terminal;
