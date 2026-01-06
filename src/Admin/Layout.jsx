import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { AdminContextProvider } from "../context/AdminContext";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            height: 40,
            maxWidth: 250,
            fontSize: 14,
          },
        }}
      />

    <AdminContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
    </AdminContextProvider>

    </>
  );
};

export default Layout;
