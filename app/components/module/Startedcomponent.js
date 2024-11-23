import React from "react";
import StartedBtn from "../elements/StartedBtn";

function Startedcomponent() {
  return (
    <div className="text-[#FFFF]">
      <div className="flex justify-center mt-[54px]">
        <p className="text-[26px] sm:text-[22px] md:text-[24px] lg:text-[26px] w-full max-w-[300px] text-center">
          لورم ایپسوم متن ساختگی با تولی
        </p>
      </div>
      <div className="flex justify-center mt-[17px]">
        <p className="text-[#949494] text-[14px] sm:text-[12px] md:text-[13px] lg:text-[14px] w-full max-w-[350px] text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای 
        </p>
      </div>
      <div className="flex justify-center mt-[30px] h-[80px]">
        <StartedBtn />
      </div>
    </div>
  );
}

export default Startedcomponent;
