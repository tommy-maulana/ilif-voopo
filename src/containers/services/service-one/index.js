import PropTypes from "prop-types";
import React from "react";
import serviceData from "../../../data/services/service-one.json";
import ServiceOneSingle from "../../../components/services/service-one";
import styles from "./ServiceOne.module.scss";

const ServiceOne = ({ serviceSpacing }) => {
  return (
    <div
      className={`${styles.voopoService} ${
        serviceSpacing === "minusMargin" ? styles.servicePosition : "ptb--120"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.voopoServiceWrapper}>
              <div className="row">
                {serviceData &&
                  serviceData.map((single, key) => {
                    return (
                      <ServiceOneSingle
                        data={single}
                        key={key}
                        styles={styles}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceOne.propTypes = {
  serviceSpacing: PropTypes.string
};

export default ServiceOne;
