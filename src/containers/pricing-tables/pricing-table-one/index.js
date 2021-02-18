import PropTypes from "prop-types";
import React from "react";
import SectionTitle from "../../../components/UI/section-title/section-title-one";
import pricingData from "../../../data/pricing-tables/pricing-table-one.json";
import PricingTableOneSingle from "../../../components/pricing-tables/pricing-table-one/index.js";
import bgImg from "./../../../assets/images/bg/1.jpg";
import styles from "./PricingTableOne.module.scss";

const PricingTableOne = ({ background }) => {
  return (
    <div
      className="voopo__picing__area pt--120 pb--120 bgImg"
      style={
        background === "none"
          ? { background: `none` }
          : { backgroundImage: `url(${bgImg})` }
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="Package" text="Pick a Pricing Plan" />
          </div>
        </div>
        <div className="row mt--30">
          {pricingData &&
            pricingData.map((single, key) => {
              return (
                <PricingTableOneSingle
                  data={single}
                  key={key}
                  styles={styles}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

PricingTableOne.propTypes = {
  background: PropTypes.string
};

export default PricingTableOne;
