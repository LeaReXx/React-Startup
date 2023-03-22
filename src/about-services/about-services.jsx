import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

export default function AboutServices() {
  let customersBrand = [
    { id: 1, title: "Discord", img: "./img/brand-icon/discord-logo.png" },
    { id: 2, title: "Google", img: "./img/brand-icon/google-logo.png" },
    { id: 3, title: "Meta", img: "./img/brand-icon/Meta-Logo.png" },
    { id: 4, title: "Paypal", img: "./img/brand-icon/paypal-logo.png" },
    { id: 5, title: "Slack", img: "./img/brand-icon/slack-logo.png" },
  ];
  return (
    <section className="container mx-auto px-3 max-w-[1330px]">
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlidesVertically={true}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            420: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            600: {
              slidesPerView: 3,
            },

            992: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}
        >
          {customersBrand.map((brand) => {
            return (
              <SwiperSlide key={brand.id}>
                <div className="max-w-[180px] h-[210px] flex items-center grayscale hover:grayscale-0 smooth-trans mx-auto">
                  <img src={brand.img} alt={brand.title} className="w-full" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
