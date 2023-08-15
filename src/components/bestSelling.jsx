import React from "react";
import stockData from "../data/stockdata";

const newStockData = stockData
  .sort((a, b) => b.avg30dOrders - a.avg30dOrders)
  .slice(0, 10);
const BestSelling = () => {
  return (
    <div className="text-white bg-gray-600 rounded-lg px-2 py-2 h-[43xvh] flex flex-col w-[350px]">
      <p className="text-xl font-bold">Best Selling Products</p>
      <div className="flex justify-between font-extralight text-[12px] mt-4">
        <p>Item name</p>
        <p>In Stock</p>
        <p>Avg 30d Orders</p>
        <p>Unit Price</p>
        <p>Stock Value</p>
      </div>
      <div className="flex flex-col gap-1">
        {newStockData.map((item) => {
          return (
            <div className="flex justify-between border-t-[1px] border-white/20 mt-1">
              <p className="w-[60px]">{item.itemName}</p>
              <p className="w-[60px]">{item.inStock}</p>
              <p className="w-[60px]">{item.avg30dOrders}</p>
              <p className="w-[60px]">${item.unitPrice}</p>
              <p className="w-[60px]">${item.stockValue}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
