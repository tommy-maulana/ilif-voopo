import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../../components/UI/section-title/section-title-one";
import productData from "../../../data/product-grid/product-grid-one.json";
import ProductGridSingle from "../../../components/product-grid/product-grid-one";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
  const params = {
    loop: true,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
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
    <div className="voppo__shop__area bg--white pt--120 pb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="Shop" text="Best Products" />
          </div>
        </div>
        <div className="row mt--30">
          <Swiper {...params}>
            {productData &&
              productData.map((single, key) => {
                return (
                  <ProductGridSingle
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

export default ProductGrid;
