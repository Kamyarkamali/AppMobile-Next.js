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
    <div>
      <Swiper
        spaceBetween={20} // فاصله بین اسلایدها
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
      >
        {filtereddata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[290px] cursor-pointer h-[296px] relative flex flex-col gap-4 p-4">
              {/* فاصله بین تصاویر با gap */}
              <img
                className="w-[290px] h-[290px] object-cover "
                src={item.image}
                alt={`Popular item ${index + 1}`}
              />
              <div className="w-[249px] h-[68px] backdrop-blur-lg border-[1px] flex justify-center items-center absolute bottom-[40px]">
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
                  <div className="flex flex-col justify-center ">
                    <div className="ml-2 flex flex-col items-center mb-3">
                      <p className="text-[12px] font-bold">{item.title}</p>
                      <div className="flex items-center justify-center">
                        <p className="text-[12px] text-ce">{item.title2}</p>
                        <img className="mr-[1px]" src={item.image2} alt="/" />
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
