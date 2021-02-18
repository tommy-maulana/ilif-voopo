import React from "react";
import serviceData from "../../../data/services/service-two.json";
import serviceContentData from "../../../data/services/service-two-content.json";
import ServiceTwoSingle from "../../../components/services/service-two";
import Button from "../../../components/UI/button";
import styles from "./ServiceTwo.module.scss";

const ServiceTwo = () => {
  return (
    <div className="voopo__best__service bg--white ptb--110  poss--relative area__text">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5 col-lg-4">
            <div className={styles.serviceTitle}>
              <h2>{serviceContentData.title}</h2>
              <h3>{serviceContentData.subtitle}</h3>
              <p>{serviceContentData.text}</p>
              <Button
                type="link"
                text="Learn More"
                url={serviceContentData.url}
              />
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="row">
              {serviceData &&
                serviceData.map((single, key) => {
                  return (
                    <ServiceTwoSingle data={single} key={key} styles={styles} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
