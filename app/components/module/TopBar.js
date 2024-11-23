import React from "react";

function TopBar() {
  return (
    <div className="flex py-6 items-center justify-between  mx-4 sm:mx-8 md:mx-12">
      <img
        className="cursor-pointer  sm:w-8 md:w-10"
        src="/icons/carbon_search.svg"
        alt="search"
      />
      <p className="text-[#FFFF] cursor-pointer text-[23px] sm:text-[20px] md:text-[23px]">
        تست
      </p>
      <img
        className="cursor-pointer  sm:w-8 md:w-10"
        src="/icons/solar_hamburger-menu-broken.svg"
        alt="hamburgerMenu"
      />
    </div>
  );
}

export default TopBar;
