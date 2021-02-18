import PropTypes from "prop-types";
import React from "react";
import { FaDotCircle } from "react-icons/fa";

const AboutContentTwoListSingle = ({ data, styles }) => {
  return (
    <div className={styles.works}>
      <div className={styles.icons}>
        <FaDotCircle />
      </div>
      <div className={styles.content}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

AboutContentTwoListSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default AboutContentTwoListSingle;
