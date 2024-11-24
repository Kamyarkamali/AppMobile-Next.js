import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import CardPopular from "./CardPopular";
import BestsellerComponent from "./BestsellerComponent";
import ButtonMenu from "./ButtonMenu";

function Popular() {
  return (
    <div className="text-white mt-[23px]">
      <div className="flex items-center justify-around">
        <div className="flex items-center cursor-pointer">
          <MdKeyboardArrowRight />
          <p className="text-[14px] font-bold cursor-pointer">دیدن همه</p>
        </div>
        <p className="text-[14px] font-bold cursor-pointer">پرمخاطب ترین</p>
      </div>
      <div className="mt-[25px] max-w-[300px] mx-auto">
        <CardPopular />
      </div>

      <div className="mt-[15px]">
        <BestsellerComponent />
      </div>

      <div className="h-[100px]">
        <ButtonMenu />
      </div>
    </div>
  );
}

export default Popular;
