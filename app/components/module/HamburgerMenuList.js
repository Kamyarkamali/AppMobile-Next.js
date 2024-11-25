import { homeMnu } from "@/data/localData";
import Link from "next/link";
import React from "react";

function HamburgerMenuList() {
  return (
    <div>
      {homeMnu.map((item) => (
        <ul className="flex items-center justify-center gap-3 mt-8">
          <li key={item.id}>{item.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default HamburgerMenuList;
