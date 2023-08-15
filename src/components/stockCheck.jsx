import React from "react";

const StockCheck = () => {
  return (
    <div className="text-white bg-gray-600 rounded-lg px-2 py-2 h-[45vh] flex flex-col w-[250px]">
      <p className="text-2xl font-bold">Stock Check</p>
      <div className="mt-6">
        <p className="text-6xl">20</p>
        <p>Days since last check</p>
      </div>
      <div className="mt-[3rem]">
        <div className="flex items-baseline">
          <p className="text-2xl font-light">Inventory Accuracy</p>
        </div>
        <p className="text-xl">99.1%</p>
      </div>
    </div>
  );
};

export default StockCheck;
