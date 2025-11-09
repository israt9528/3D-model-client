import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="mt-4">
          <Outlet />
        </div>
        {/* <Footer/> */}
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
