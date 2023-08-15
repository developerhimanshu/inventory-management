import React from "react";

const Returns = () => {
  return (
    <div className="text-white bg-gray-600 rounded-lg px-2 py-2 w-[700px] h-[200px]">
      <p className="text-2xl font-bold ">Returns</p>
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <p className="text-5xl">43</p>
          <p>To be Processed</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-5xl">2.9%</p>
          <p>Return Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Returns;
