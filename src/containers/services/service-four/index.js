import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import serviceData from "../../../data/services/service-four-content.json";
import { MdPlayArrow } from "react-icons/md";
import bgImg from "../../../assets/images/bg/7.jpg";
import styles from "./ServiceFour.module.scss";

const ServiceFour = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div className={`vp__service ${styles.service3} position-relative`}>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div
            className="col-12 col-lg-6"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`
            }}
          >
            <div className={styles.serviceInner}>
              <h2>{serviceData.title}</h2>
              <p>{serviceData.content}</p>
              <ModalVideo
                channel="youtube"
                isOpen={modalStatus}
                videoId={serviceData.videoId}
                onClose={() => isOpen(false)}
              />
              <div className={styles.videoIcon}>
                <button onClick={() => isOpen(true)}>
                  <span className={styles.videoIconStyle}>
                    <div className={styles.iconWrapper}>
                      <MdPlayArrow />
                    </div>
                  </span>
                  <span>Play Video</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.thumb}>
              <img
                src={require("./../../../assets/images/about/" +
                  serviceData.image)}
                alt="voopo voip"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFour;
