import React from "react";
import { Link } from "react-router-dom";
import {
  FaFilePdf,
  FaFileWord,
  FaCloud,
  FaWaveSquare,
  FaBriefcase,
  FaRegLifeRing
} from "react-icons/fa";
import styles from "./ServiceSidebar.module.scss";

const ServiceSidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Services</h3>
        <ul className={styles.sidebarList}>
          <li>
            <Link to={process.env.PUBLIC_URL + "/service-details"}>
              <FaCloud />
              Cloud Base Solutions
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/service-details"}>
              <FaWaveSquare />
              Seamless Mobility
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/service-details"}>
              <FaBriefcase />
              Business Customize
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/service-details"}>
              <FaRegLifeRing />
              Lifetime Support
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Download brochure</h3>
        <ul className={styles.sidebarList}>
          <li>
            <a href={process.env.PUBLIC_URL + "#/"}>
              <FaFilePdf />
              Brochures.PDF
            </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + "#/"}>
              <FaFileWord />
              Brochures.DOC
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebar;
