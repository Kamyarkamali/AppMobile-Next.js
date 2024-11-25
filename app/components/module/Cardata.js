import { dataCardImage } from "@/data/localData";
import React from "react";

function Cardata() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-[86%] max-w-[347px] h-[191px] p-2 grid grid-cols-8 gap-1 flex-wrap border-[1px] border-[#9F66C6] rounded-[10px] mx-auto overflow-hidden">
        {dataCardImage.map((item) => (
          <div className="relative p-1" key={item.id}>
            <img
              className="w-[45.42px] rotate-[-12deg] object-cover h-[45.42px] rounded-[10px]"
              src={item.image}
              alt={item.name}
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%] text-[10px] text-white font-bold bg-black bg-opacity-50 px-1 py-[2px] rounded">
              {item.name}
            </p>
          </div>
        ))}
        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-[10px]"
          style={{
            background:
              "linear-gradient(to right, black 40%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0) 100%)",
            opacity: "0.9",
          }}
        ></div>

        {/* متن ثابت کارت */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col gap-2 items-start justify-start">
          <p className="text-[#FFFF] w-[173px] text-[20px] font-bold">
            لورم ایپسوم متن ساختگی با تولید 
          </p>
          <p className="text-[#C6C6C6] text-[12px] w-[240px] font-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با اس
          </p>
          <div className="flex gap-[6px] items-center justify-end w-full mt-[10px]">
            <img src="/images/Frame 6.png" alt="/" />
            <button className="text-[#FFFF] text-[20px] font-bold">خرید</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardata;
