import PropTypes from "prop-types";
import React from "react";
import styles from "./Breadcrumb.module.scss";
import bgImg from "../../../assets/images/bg/5.jpg";

const Breadcrumb = ({ title }) => {
  return (
    <div
      className={styles.prBreadcrumbArea}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`${styles.breadcrumbInner} text-left`}>
              <h2 className={styles.breadcrumbTitle}>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string
};

export default Breadcrumb;
