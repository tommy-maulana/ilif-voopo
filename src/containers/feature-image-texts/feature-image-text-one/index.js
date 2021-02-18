import React from "react";
import styles from "./FeatureImageTextOne.module.scss";
import featureData from "../../../data/features/feature-one.json";

const FeatureImageTextOne = () => {
  return (
    <div className={`${styles.voopoBusiness} bg--cart-4 ptb--110`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className={styles.thumb}>
              <img
                src={require("./../../../assets/images/about/" +
                  featureData.image)}
                alt="voopo voip"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5 sm__mt--40">
            <div className={styles.content}>
              <h2>{featureData.title}</h2>
              <p className={styles.firstDesc}>{featureData.text}</p>
              <div dangerouslySetInnerHTML={{ __html: featureData.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureImageTextOne;
