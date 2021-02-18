import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../../components/UI/section-title/section-title-one";
import testimonialData from "../../../data/testimonials/testimonial-one.json";
import styles from "./TestimonialOne.module.scss";
import TestimonialOneSingle from "../../../components/testimonials/testimonial-one";

const TestimonialOne = () => {
  const params = {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div className="voopo__testimnial bg--white ptb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="Testimonial" text="What Client Say" />
          </div>
        </div>
        <div className="row mt--30">
          <Swiper {...params}>
            {testimonialData &&
              testimonialData.map((single, key) => {
                return (
                  <TestimonialOneSingle
                    data={single}
                    key={key}
                    styles={styles}
                    sliderClass="swiper-slide"
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
