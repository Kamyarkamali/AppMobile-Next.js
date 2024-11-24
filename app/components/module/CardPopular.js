"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { popularDataCard } from "@/data/localData";

function CardPopular() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {popularDataCard.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[290px] cursor-pointer h-[296px] border-[1px] border-[#333333] relative">
              <img src={item.image} alt={`Popular item ${index + 1}`} />
              <div className="w-[249px] h-[68px] absolute bottom-5 left-[8%]  backdrop-blur-lg border-[1px] flex  justify-center items-center">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col mr-2">
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-bold">{item.price}</p>
                      <img className="w-[18px]" src="/images/price.png" />
                    </div>

                    <div>
                      <p>{item.date}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center ">
                    <div className="ml-2 flex flex-col items-center mb-3">
                      <p className="text-[12px] font-bold">{item.title}</p>
                      <div className="flex items-center justify-center">
                        <p className="text-[12px] text-ce">{item.title2}</p>
                        <img src={item.image2} alt="/" />
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
