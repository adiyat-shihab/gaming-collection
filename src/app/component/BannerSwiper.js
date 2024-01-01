"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import "swiper/css";
import BannerImage from "@/app/component/BannerImage";
import { FreeMode } from "swiper/modules";

SwiperCore.use([FreeMode]);

const BannerSwiper = ({ item }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        freeModeSticky={false}
        freeMode={{ enabled: true, momentumRatio: 0.4 }}
        autoplay={true}
        slidesPerView={1.2}
        spaceBetween={20}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {item?.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerImage image={item.background_image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default BannerSwiper;
