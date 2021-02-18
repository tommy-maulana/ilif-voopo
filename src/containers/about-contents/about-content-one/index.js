import React from "react";
import styles from "./AboutContentOne.module.scss";
import SectionTitleTwo from "../../../components/UI/section-title/section-title-two";
import aboutContent from "../../../data/about-content/about-content-one.json";

const AboutContentOne = () => {
  return (
    <div className={`${styles.voopoAboutArea} position-relative bg--cart-11`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="aboutInner">
              <SectionTitleTwo
                title={aboutContent.title}
                text={aboutContent.subTitle}
              />
              <div dangerouslySetInnerHTML={{ __html: aboutContent.content }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutThumb}>
        <img
          src={require("./../../../assets/images/about/" + aboutContent.image)}
          alt="voopo voip"
        />
      </div>
    </div>
  );
};

export default AboutContentOne;
