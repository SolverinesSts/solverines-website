'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
 
// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import Image from 'next/image';
 
export default function App({InputData}:any) {
    const data=InputData;
    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation,FreeMode]}
         
          className="mySwiper"
        >
         {data?.map((image:any,index:number)=>(
       <SwiperSlide key={index}>
          <Image
          src={image?.imageUrl}
          alt={image?.imageAlt}
          height={100}
          width={100}
          />
       </SwiperSlide>
     ))}
        </Swiper>
      </>
    );
}