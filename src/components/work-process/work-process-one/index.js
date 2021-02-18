import PropTypes from "prop-types";
import React from "react";

const WorkProcessSingleOne = ({ data, styles }) => {
  return (
    <div className={styles.voopoProcess}>
      <div className={styles.count}>
        <span>{data.count}</span>
      </div>
      <div className={styles.content}>
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

WorkProcessSingleOne.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default WorkProcessSingleOne;
