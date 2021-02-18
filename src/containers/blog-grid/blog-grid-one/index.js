import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../../components/UI/section-title/section-title-one";
import blogGridData from "../../../data/blog-grid/blog-grid-one.json";
import BlogGridSingle from "../../../components/blog-grid/blog-grid-one/index.js";
import styles from "./BlogGrid.module.scss";

const BlogGrid = () => {
  const params = {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
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
    <div className="voopo__blog__area bg--cart-5 pt--120 pb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="News" text="Our Latest News" />
          </div>
        </div>
        <div className="row mt--30">
          <Swiper {...params}>
            {blogGridData &&
              blogGridData.map((single, key) => {
                return (
                  <BlogGridSingle
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

export default BlogGrid;
