import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe modi illum earum veniam atque nam in dolores, consequatur voluptatem possimus accusantium expedita sunt reprehenderit blanditiis similique optio sequi obcaecati?",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe modi illum earum veniam atque nam in dolores, consequatur voluptatem possimus accusantium expedita sunt reprehenderit blanditiis similique optio sequi obcaecati?",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe modi illum earum veniam atque nam in dolores, consequatur voluptatem possimus accusantium expedita sunt reprehenderit blanditiis similique optio sequi obcaecati?",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama MacBron",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe modi illum earum veniam atque nam in dolores, consequatur voluptatem possimus accusantium expedita sunt reprehenderit blanditiis similique optio sequi obcaecati?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="one avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
