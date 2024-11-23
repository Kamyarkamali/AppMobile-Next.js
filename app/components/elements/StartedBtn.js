"use client";

import { redirect } from "next/navigation";
import React from "react";

function StartedBtn() {
  const clickHandeler = () => {
    redirect("/home");
  };

  return (
    <div>
      <button
        onClick={clickHandeler}
        className="text-[20px] bg-gradient-to-r from-[#101F84] to-[#9732DD] w-[310px] h-[53px] rounded-[20px]"
      >
        شروع
      </button>
    </div>
  );
}

export default StartedBtn;
