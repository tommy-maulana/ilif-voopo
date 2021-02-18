import PropTypes from "prop-types";
import React from "react";
import styles from "./SectionTitleTwo.module.scss";

const SectionTitleTwo = ({ title, text, color }) => {
  return (
    <div className={styles.sectionTitle2}>
      <span className={color && color === "white" ? "text-white" : ""}>
        {title}
      </span>
      <h2 className={color && color === "white" ? "text-white" : ""}>{text}</h2>
    </div>
  );
};

SectionTitleTwo.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
};

export default SectionTitleTwo;
