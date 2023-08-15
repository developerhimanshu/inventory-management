import React from "react";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AddProduct from "./pages/addProduct";
const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add product" element={<AddProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
