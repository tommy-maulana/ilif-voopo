import PropTypes from "prop-types";
import React from "react";
import Button from "../../UI/button";

const HeroSliderTwoSingle = ({ data, styles, sliderClassName }) => {
  return (
    <div
      className={`${styles.slide} ${styles.sliderFixedHeight} ${
        styles.graBg1
      } ${sliderClassName ? sliderClassName : ""} d-flex align-items-center`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 col-xl-5">
            <div className={styles.content}>
              <h1>{data.title}</h1>
              <p>{data.text}</p>
              <Button type="link" url={data.url} text="Learn More" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-7">
            <div className={styles.slideFrontImg}>
              <img
                src={require("./../../../assets/images/banner/" + data.image)}
                alt="voopo voip"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwoSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default HeroSliderTwoSingle;
