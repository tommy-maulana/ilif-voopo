import PropTypes from "prop-types";
import React from "react";
import { MdCloudQueue } from "react-icons/md";

const ServiceTwoSingle = ({ data, styles }) => {
  return (
    <div className="col-12 col-lg-12 col-xl-6 sm__mt--40">
      <div className={styles.bestService}>
        <div
          className={styles.icon}
          style={{
            background: `url(${require("./../../../assets/images/icons/" +
              data.icon)}) no-repeat scroll left top`
          }}
        >
          <MdCloudQueue />
        </div>
        <div className={styles.content}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

ServiceTwoSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default ServiceTwoSingle;
