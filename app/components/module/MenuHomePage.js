"use client";

import { homeMnu } from "@/data/localData";
import Link from "next/link";
import { useState } from "react";

function MenuHomePage() {
  const [active, setActive] = useState("همه");

  const clickHandeler = (title) => {
    setActive(title);
  };

  return (
    <div className="text-white">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-4 mt-4 sm:mt-[31px] text-sm sm:text-[15px] text-[#949494]">
        {homeMnu.map((item) => (
          <Link
            onClick={() => clickHandeler(item.title)}
            className={`transition duration-500 ease-in-out ${
              active === item.title
                ? "bg-gray-800 rounded-[10px] w-[80px] h-[35px] text-center flex items-center justify-center"
                : "flex items-center justify-center"
            }`}
            key={item.id}
            href={item.path}
          >
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MenuHomePage;
