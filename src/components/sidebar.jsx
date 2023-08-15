import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineDollarCircle } from "react-icons/ai";
import { FaPlus, FaTasks } from "react-icons/fa";
const demoCategories = [
  { name: "Dashboard", icon: <AiOutlineDashboard size={20} /> },
  { name: "Add Product", icon: <FaPlus /> },
  { name: "Profit", icon: <AiOutlineDollarCircle /> },
  { name: "Management", icon: <FaTasks /> },
];
const Sidebar = () => {
  return (
    <div className="text-white  sticky left-0 top-0  bg-black  h-[100vh] w-[150px] flex flex-col  border-r border-[#2a2a2a]">
      <Link to="/">
        <img className="" onClick={() => {}} src="" alt="" />
      </Link>
      <div className="sidebar flex flex-col h-screen ">
        <div className="w-full flex flex-col align-center ">
          {demoCategories.map((category) => (
            <Link to={`/${category.name.toLowerCase()}`}>
              <p
                onClick={() => {}}
                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700 justify-between"
              >
                {" "}
                {category.icon ? category.icon : ""} {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
