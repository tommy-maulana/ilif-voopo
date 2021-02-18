import React from "react";
import LocationMap from "../../../components/contact/contact-map";
import styles from "./ContactMap.module.scss";

const ContactMap = () => {
  return (
    <div className={`${styles.voopoAddress} bg--cart-10`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-5">
            <div className={styles.vpContactAddress}>
              <h2>Out Contact Info</h2>
              <div className="vp__address__container">
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>Address</h4>
                  <p>Doemon Demon 77/h9 South Road, USA - 009877</p>
                </div>
                {/* End Single Address */}
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>Address</h4>
                  <p>
                    <a href="mailto:demovoopo@mail.com">demovoopo@mail.com</a>
                  </p>
                  <p>
                    <a
                      href="http://demo.mailvoopo.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      demo.mailvoopo.info
                    </a>
                  </p>
                </div>
                {/* End Single Address */}
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>Address</h4>
                  <p>
                    <a href="tel:+122555666999">+1 (22) 555 666 999</a>
                  </p>
                  <p>
                    <a href="tel:+122555999966">+1 (22) 555 999 966</a>
                  </p>
                </div>
                {/* End Single Address */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.googleMap}>
        {/* location map */}
        <LocationMap latitude="47.444" longitude="-122.176" />
      </div>
    </div>
  );
};

export default ContactMap;
