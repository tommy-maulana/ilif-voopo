import React from "react";
import SectionTitle from "../../../components/UI/section-title/section-title-one";
import ServiceOneSingle from "../../../components/services/service-one";
import serviceData from "../../../data/services/service-one.json";
import styles from "../service-one/ServiceOne.module.scss";

const ServiceFive = () => {
  return (
    <div className="voopo__service pb--120 pt--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="Outline" text="Work Overview" />
          </div>
        </div>
        <div className="row mt--60">
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

export default ServiceFive;
