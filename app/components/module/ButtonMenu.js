"use client";
import React, { useState } from "react";

function ButtonMenu() {
  const [activeIcon, setActiveIcon] = useState("/icons/Group 17.svg");

  const handleIconClick = (iconPath) => {
    setActiveIcon(iconPath);
  };

  return (
    <div className="fixed bottom-0 bg-[#60606033] backdrop-blur-xl border-[1px] border-gray-500 flex justify-center items-center left-1/2 transform -translate-x-1/2 rounded-[20px] z-30 w-[344px] h-[64px]">
      <div className="flex justify-around items-center w-full">
        <img
          className={`menu-icon ${
            activeIcon === "/icons/Setting 2.svg" ? "svg-active" : ""
          }`}
          src="/icons/Setting 2.svg"
          alt="Setting"
          onClick={() => handleIconClick("/icons/Setting 2.svg")}
        />

        <img
          className={`menu-icon ${
            activeIcon === "/icons/Chart.svg" ? "svg-active" : ""
          }`}
          src="/icons/Chart.svg"
          alt="Chart"
          onClick={() => handleIconClick("/icons/Chart.svg")}
        />

        <img
          className={`menu-icon ${
            activeIcon === "/icons/Discovery.svg" ? "svg-active" : ""
          }`}
          src="/icons/Discovery.svg"
          alt="Discovery"
          onClick={() => handleIconClick("/icons/Discovery.svg")}
        />

        <img
          className={`menu-icon ${
            activeIcon === "/icons/Group 17.svg" ? "svg-active" : ""
          }`}
          src="/icons/Group 17.svg"
          alt="Group 17"
          onClick={() => handleIconClick("/icons/Group 17.svg")}
        />
      </div>
    </div>
  );
}

export default ButtonMenu;
