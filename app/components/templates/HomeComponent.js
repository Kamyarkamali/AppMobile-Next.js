import React from "react";
import TopBar from "../module/TopBar";
import Carddata from "../module/Cardata";
import MenuHomePage from "../module/MenuHomePage";
import Popular from "../module/Popular";
import { ContextProvider } from "@/app/context/ContextProvider";

function HomeComponent() {
  return (
    <ContextProvider>
      <div className="h-screen">
        <div className="flex items-center justify-center  mt-[26px]">
          <Carddata />
        </div>
        <div>
          <MenuHomePage />
        </div>

        <div>
          <Popular />
        </div>
      </div>
    </ContextProvider>
  );
}

export default HomeComponent;
