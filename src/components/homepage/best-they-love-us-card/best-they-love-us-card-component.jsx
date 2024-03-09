import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

function BestTheyLoveUsCardComponent({ cardList, swiperRef }) {
  const renderData = () => {
    return cardList.map((card, index) => (
      <SwiperSlide key={index} className="flex justify-center">
        <div className="py-12 px-8 shadow-lg bg-white rounded-[20px] overflow-hidden h-full min-h-[384px] flex flex-wrap flex-end">
          <img src={card.companyLogo} alt="company logo" className="object-contain"></img>
          <p className="text-black md:text-2xl md:leading-[38.4px] text-base leading-[22.4px] font-normal py-4">{card.description}</p>
          <div className="flex relative bottom-0">
            <img src={card.avatar} alt={card.fullName} className="object-contain rounded-full"></img>
            <div className="pl-3 flex items-center flex-wrap">
              <p className="w-full text-black text-lg font-normal leading-[28.8px]">{card.fullName}</p>
              <p className="w-full text-slate-600 text-base font-normal leading-[22.4px]">{card.title}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <Swiper 
    className="py-4" 
    spaceBetween={20} 
    loop={false} 
    centeredSlides={true}
    centeredSlidesBounds={true}
    breakpoints={{
      300: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3.5,
      }
    }}
    onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
    >
      {renderData()}
    </Swiper>
  );
}
export default BestTheyLoveUsCardComponent;
