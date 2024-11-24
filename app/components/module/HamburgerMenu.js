"use client";

import { IoClose } from "react-icons/io5";
import HamburgerMenuList from "./HamburgerMenuList";
import { useEffect, useRef } from "react";

function HamburgerMenu({ setOpen }) {
  const mewnuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mewnuRef.current && !mewnuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <div
      ref={mewnuRef}
      className="bg-gray-800 fixed top-0 left-0 w-[200px] h-screen bg-opacity-90 z-30 transform transition-transform duration-500 ease-in-out"
    >
      {/* آیکون بستن */}
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <IoClose color="white" size={30} />
      </div>

      {/* محتوا */}
      <div className="flex flex-col justify-center items-center h-[300px] text-white">
        <HamburgerMenuList />
      </div>
    </div>
  );
}

export default HamburgerMenu;
