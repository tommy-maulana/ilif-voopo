import React from "react";
import softwareContent from "../../../data/software-download/software-download-two.json";
import backgroundImage from "../../../assets/images/bg/3.jpg";
import windowsLogo from "../../../assets/images/icons/down2.png";
import appleLogo from "../../../assets/images/icons/apple2.png";
import styles from "./SoftwareDownloadTwo.module.scss";

const SoftwareDownloadTwo = () => {
  return (
    <div
      className={`${styles.softwareStyle2} ${styles.voopoSoftware}`}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className={styles.content}>
              <h2>{softwareContent.title}</h2>
              <p>{softwareContent.content}</p>
              <ul className={styles.downloadBtn}>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={process.env.PUBLIC_URL + "/"}
                  >
                    Download
                    <img src={windowsLogo} alt="voip voopo" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={process.env.PUBLIC_URL + "/"}
                  >
                    Download
                    <img src={appleLogo} alt="voip voopo" />
                  </a>
                </li>
              </ul>
              <div className={styles.thumb}>
                <img
                  src={require("./../../../assets/images/about/" +
                    softwareContent.image)}
                  alt="voopo voip"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDownloadTwo;
