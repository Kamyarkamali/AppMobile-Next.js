"use client";

import { useMenuContext } from "@/app/context/ContextProvider";
import { homeMnu } from "@/data/localData";
import Link from "next/link";

function MenuHomePage() {
  const { active, setActive } = useMenuContext();

  const clickHandeler = (title) => {
    setActive(title);
  };

  return (
    <div className="text-white">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-4 mt-4 sm:mt-[31px] text-sm sm:text-[15px] text-[#949494]">
        {homeMnu.map((item) => (
          <li
            onClick={() => clickHandeler(item.title)}
            className={`transition cursor-pointer duration-500 ease-in-out ${
              active === item.title
                ? "bg-gray-800 rounded-[10px] w-[80px] py-2  text-center flex items-center justify-center"
                : "flex items-center justify-center"
            }`}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuHomePage;
