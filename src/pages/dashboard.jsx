import React from "react";
import Stock from "../components/stock";
import Returns from "../components/returns";

const Dashboard = () => {
  return (
    <div className="w-full px-4 py-2 bg-gray-800 flex">
      <div className="flex flex-col gap-3">
        <Stock />
        <Returns />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
