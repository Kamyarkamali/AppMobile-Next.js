import React from "react";
import TopBar from "../module/TopBar";
import Carddata from "../module/Cardata";
import MenuHomePage from "../module/MenuHomePage";
import Popular from "../module/Popular";

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

      <div>
        <Popular />
      </div>
    </div>
  );
}

export default HomeComponent;
