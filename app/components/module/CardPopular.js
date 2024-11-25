"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { popularDataCard } from "@/data/localData";
import { useMenuContext } from "@/app/context/ContextProvider";

function CardPopular() {
  const { active } = useMenuContext();
  const filtereddata = popularDataCard[active] || [];

  return (
    <div className="w-[130%] shadow-lg translate-x-7 mx-auto">
      {" "}
      {/* عرض را بیشتر کنید */}
      <Swiper
        centeredSlides={true}
        loop={true}
        spaceBetween={-80}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {filtereddata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[290px] cursor-pointer h-[296px] relative flex flex-col gap-4 p-4">
              <img
                className="h-[310px] mx-auto object-cover"
                src={item.image}
                alt={`Popular item ${index + 1}`}
              />
              <div className="w-[249px] h-[68px] backdrop-blur-lg border-[1px] flex justify-center items-center absolute bottom-[40px] left-1/2 transform -translate-x-1/2">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col mr-2">
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-bold">{item.price}</p>
                      <img className="w-[18px]" src="/images/price.png" />
                    </div>
                    <div>
                      <p className="text-sm">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div
                      className={`ml-2 flex flex-col items-center mb-3 ${
                        Object.values(item)[0] ? "ml-[6px]" : ""
                      }`}
                    >
                      <p className="text-[12px] font-bold">{item.title}</p>
                      <div className="flex items-center justify-center">
                        <p className="text-[12px] text-ce">{item.title2}</p>
                        <img
                          className={`${
                            Object.values(item)[0] ? "ml-[3px]" : ""
                          }`}
                          src={item.image2}
                          alt="/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CardPopular;
