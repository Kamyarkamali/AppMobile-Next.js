import { homeMnu } from "@/data/localData";
import Link from "next/link";
import React from "react";

function HamburgerMenuList() {
  return (
    <div>
      {homeMnu.map((item) => (
        <ul className="flex items-center justify-center gap-3 mt-8">
          <Link key={item.id} href={item.path}>
            <li>{item.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default HamburgerMenuList;
