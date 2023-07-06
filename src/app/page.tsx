import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Body from "./components/Body/Body";
import Footer from "./components/footer/Footer";

export default function home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <SideBar />
        <Body />
      </div>
      <Footer />

    </div>
  );
};

