import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const addedNotify = (event) => {
    event.preventDefault();
    toast.success("Item Added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const inputClass =
    "px-2 py-2 text-[20px] rounded-md border-none outline-none w-[550px]";

  return (
    <div className="w-full px-6 py-4 bg-gray-800 flex flex-col text-white gap-5">
      <p className="text-2xl font-bold">Add Product +</p>
      <div className="w-[100px] h-1 mt-[-15px] bg-white"></div>
      <div className="flex justify-center text-black">
        <form
          className="flex flex-col gap-3 w-[550px] items-center"
          onSubmit={addedNotify}
        >
          <input
            type="text"
            placeholder="Item Name"
            className={inputClass}
            required
          />
          <input
            type="number"
            placeholder="No of stocks"
            className={inputClass}
            required
          />
          <input
            type="number"
            placeholder="Average 30 days orders"
            className={inputClass}
            required
          />
          <input
            type="number"
            placeholder="Unit Price"
            className={inputClass}
            required
          />
          <input
            type="number"
            placeholder="Stock Value"
            className={inputClass}
            required
          />
          <button
            type="submit"
            className="bg-green-600 w-[150px] rounded-lg py-2 text-white text-[20px] cursor-pointer"
          >
            Add item
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
