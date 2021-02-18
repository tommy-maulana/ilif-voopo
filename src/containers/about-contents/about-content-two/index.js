import React from "react";
import aboutContentListData from "../../../data/about-content/about-content-two-list.json";
import AboutContentTwoListSingle from "../../../components/about-contents/about-content-two/index.js";
import SectionTitleTwo from "../../../components/UI/section-title/section-title-two/index.js";
import aboutContent from "../../../data/about-content/about-content-two.json";
import bgImg from "../../../assets/images/bg/6.jpg";
import styles from "./AboutContentTwo.module.scss";

const AboutContentTwo = () => {
  return (
    <div
      className={styles.voopoWorks}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className={styles.worksInner}>
              <SectionTitleTwo
                title={aboutContent.title}
                text={aboutContent.subTitle}
                color="white"
              />

              <p>{aboutContent.text}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 sm__mt--40">
            <div className={styles.worksList}>
              {aboutContentListData &&
                aboutContentListData.map((single, key) => {
                  return (
                    <AboutContentTwoListSingle
                      data={single}
                      key={key}
                      styles={styles}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContentTwo;
