import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import ServiceOne from "../service-one";
import { MdPlayArrow } from "react-icons/md";
import serviceData from "../../../data/services/service-three-content.json";
import styles from "./ServiceThree.module.scss";

const ServiceThree = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div className="voopo__service__video bg--cart-9">
      {/* Start Service Area */}
      <ServiceOne serviceSpacing="minusMargin" />
      {/* End Service Area */}
      {/* Start Video Start */}
      <div className={styles.voopoVideo}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className={styles.videoInner}
                style={{
                  backgroundImage: `url(${require("./../../../assets/images/bg/" +
                    serviceData.backgroundImage)})`
                }}
              >
                <div className="row">
                  <div className="col-12 col-sm-9 col-md-7 col-xl-5">
                    <div className={styles.videoContent}>
                      <div
                        className={styles.videoContentIcon}
                        style={{
                          backgroundImage: `url(${require("./../../../assets/images/icons/" +
                            serviceData.serviceContentIcon)})`
                        }}
                      />
                      <h2>{serviceData.serviceTitle}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: serviceData.serviceContent
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-5 col-xl-7 d-none d-sm-block">
                    <ModalVideo
                      channel="youtube"
                      isOpen={modalStatus}
                      videoId={serviceData.videoId}
                      onClose={() => isOpen(false)}
                    />
                    <div className={styles.videoTrigger}>
                      <button onClick={() => isOpen(true)}>
                        <div className={styles.iconWrapper}>
                          <MdPlayArrow />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Video Start */}
    </div>
  );
};

export default ServiceThree;
