import PropTypes from "prop-types";
import React from "react";

const ProductGridSingle = ({ data, styles, sliderClass }) => {
  return (
    <div className={`col-lg-3 ${sliderClass ? sliderClass : ""}`}>
      <div className={styles.product}>
        <div className={styles.thumb}>
          <img
            src={require("./../../../assets/images/shop/" + data.image)}
            alt="voopo voip"
          />
        </div>
        <div className={styles.content}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <span className={styles.price}>${data.price}</span>
        </div>
      </div>
    </div>
  );
};

ProductGridSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default ProductGridSingle;
