import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function BestsellerComponent() {
  return (
    <div>
      <div className="flex justify-around items-center p-1">
        <div className="flex items-center">
          <MdKeyboardArrowRight />
          <p className="text-[13px]">see All</p>
        </div>
        <p className="text-[16px]">پرفروش ترین</p>
      </div>

      <div className="flex justify-around mt-[16px]">
        <button className="bg-[#9F66C6] rounded-[5px] text-[16px] w-[93px] h-[36px]">
          خرید
        </button>
        <div className="flex items-center gap-2">
          <div>
            <p className="text-[13px]">لورم ایپسوم متن </p>
            <div className="flex items-center gap-1">
              <p className="text-[13px]">111,111,11</p>
              <img src="/images/price.png" />
            </div>
          </div>
          <img src="/images/Rectangle 5 (1).png" />
        </div>
      </div>
    </div>
  );
}

export default BestsellerComponent;
