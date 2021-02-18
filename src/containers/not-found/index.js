import React from "react";
import styles from "./NotFoundContent.module.scss";
import Button from "../../components/UI/button";

const NotFoundContent = () => {
  return (
    <div className={`${styles.errorPageWrapper} d-flex align-items-center`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-9 m-auto text-center">
            <div
              className={`${styles.errorContentCentered} d-flex align-items-center justfy-content-center`}
            >
              <div className={styles.errorPageContentWrap}>
                <h2>404</h2>
                <h3>PAGE NOT FOUND</h3>
                <p>
                  Sorry but the page you are looking for does not exist, have
                  been removed, name changed or is temporarily unavailable.
                </p>
                <Button type="link" text="Back to Home Page" url="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundContent;
