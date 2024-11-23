import React from "react";
import TopBar from "../module/TopBar";
import Carddata from "../module/Cardata";
import MenuHomePage from "../module/MenuHomePage";

function HomeComponent() {
  return (
    <div className="h-screen">
      <div>
        <TopBar />
      </div>

      <div className="flex items-center justify-center  mt-[36px]">
        <Carddata />
      </div>

      <div>
        <MenuHomePage />
      </div>
    </div>
  );
}

export default HomeComponent;
