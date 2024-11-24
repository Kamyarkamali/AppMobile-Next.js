"use client";

import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

function TopBar() {
  const [open, setOpen] = useState(false); // For Hamburger Menu
  const [searchOpen, setSearchOpen] = useState(false); // For Search Box

  return (
    <div className="flex py-6 items-center justify-between mx-4 sm:mx-8 md:mx-12 relative">
      {/* Search Icon */}
      <img
        className="cursor-pointer sm:w-8 md:w-10"
        src="/icons/carbon_search.svg"
        alt="search"
        onClick={() => setSearchOpen(!searchOpen)} // Toggle search box
      />

      {/* Search Box */}
      {searchOpen && (
        <div
          className={`absolute top-8 left-0 right-0 mx-auto w-[80%] sm:w-[60%] md:w-[40%] text-gray-950 bg-gray-800 rounded-lg shadow-lg p-4 transform transition-all duration-500 ease-in-out ${
            searchOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="جستجو کنید..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-gray-500 focus:ring-purple-500 placeholder:text-white"
          />
        </div>
      )}

      {/* Title */}
      <p className="text-[#FFFF] cursor-pointer text-[23px] sm:text-[20px] md:text-[23px]">
        تست
      </p>

      {/* Hamburger Menu */}
      <div onClick={() => setOpen(true)} className="relative cursor-pointer">
        <img
          className="cursor-pointer sm:w-8 md:w-10"
          src="/icons/solar_hamburger-menu-broken.svg"
          alt="hamburgerMenu"
        />
      </div>

      {/* Hamburger Menu open */}
      {open && (
        <div className={`absolute top-0 left-0 z-50`}>
          <HamburgerMenu setOpen={setOpen} />
        </div>
      )}
    </div>
  );
}

export default TopBar;
