import PropTypes from "prop-types";
import React from "react";

const TestimonialOneSingle = ({ styles, data, sliderClass }) => {
  return (
    <div
      className={`col-12 col-sm-6 col-md-4 text-center ${
        sliderClass ? sliderClass : ""
      }`}
    >
      <div className={styles.testimonial}>
        <div className={styles.thumb}>
          <img
            src={require("./../../../assets/images/client/" + data.image)}
            alt="voopo voip"
          />
        </div>
        <div className={styles.clientInfo}>
          <h4>{data.name}</h4>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialOneSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default TestimonialOneSingle;
