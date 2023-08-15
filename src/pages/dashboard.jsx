import React from "react";
import Stock from "../components/stock";
import Returns from "../components/returns";
import StockCheck from "../components/stockCheck";
import Warehouse from "../components/warehouse";
import BestSelling from "../components/bestSelling";

const Dashboard = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-800 flex flex-col lg:flex-row text-white gap-5">
      <div className="flex flex-col gap-3">
        <Stock />
        <Returns />
      </div>
      <div className="flex lg:flex-col flex-row gap-3">
        <StockCheck />
        <Warehouse />
      </div>
      <div>
        <BestSelling />
      </div>
    </div>
  );
};

export default Dashboard;
