import React from "react";

const Warehouse = () => {
  return (
    <div className="text-white bg-gray-600 rounded-lg px-2 py-2 h-[43xvh] flex flex-col w-[250px]">
      <p className="text-2xl font-bold">Warehouse</p>
      <div className="mt-6">
        <p className="text-6xl">81%</p>
        <p>Utilization</p>
      </div>
      <div className="mt-[3rem]">
        <div className="flex items-baseline">
          <p className="text-4xl bottom-0">$</p>
          <p className="text-6xl">4.25</p>
          <p className="text-4xl">M</p>
        </div>
        <p>Value of Stock</p>
      </div>
    </div>
  );
};

export default Warehouse;
