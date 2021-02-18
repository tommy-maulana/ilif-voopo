import PropTypes from "prop-types";
import React from "react";
import Button from "../../UI/button";

const PricingTableOneSingle = ({ data, styles }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div
        className={`${styles.pricing} ${data.featured ? styles.active : ""}`}
      >
        <div className={styles.content}>
          <span>{data.planName}</span>
          <div className={styles.price}>
            <p>
              <sup>{data.planPriceCurrency}</sup> {data.planPrice}{" "}
              <sub>{data.planPriceDuration}</sub>
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.planFeatures }} />
          <div className="price__btn">
            <Button
              type="link"
              url="/contact"
              text="Order Now"
              btnStyle={data.featured ? "" : "light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PricingTableOneSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default PricingTableOneSingle;
