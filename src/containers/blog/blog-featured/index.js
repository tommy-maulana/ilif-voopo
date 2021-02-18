import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/button";
import styles from "./BlogFeatured.module.scss";

const BlogFeatured = () => {
  return (
    <div className="banner__area ptb--120">
      <div className="container">
        <div className="row">
          {/* Start Single Banner  */}
          <div className="col-12 col-lg-6">
            <div className={styles.banner}>
              <div className={styles.thumb}>
                <img
                  src={require("./../../../assets/images/blog/bn1.png")}
                  alt="voopo voip"
                />
              </div>
              <div className={styles.hoverAction}>
                <div className={styles.bannerContent}>
                  <span>Tracking</span>
                  <h3>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      This is the most powerful VoIP service in USA
                    </Link>
                  </h3>
                  <div className={styles.bannerBtn}>
                    <Button type="link" url="/blog-post" text="Read More" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  Single Banner  */}
          {/* Start Single Banner  */}
          <div className="col-12 col-sm-6 col-lg-3 sm__mt--40 md__mt--40">
            <div className={`${styles.banner} ${styles.b11}`}>
              <div className={styles.thumb}>
                <img
                  src={require("./../../../assets/images/blog/bn2.png")}
                  alt="voopo voip"
                />
              </div>
              <div className={styles.hoverAction}>
                <div className={styles.bannerContent}>
                  <span>Tracking</span>
                  <h3>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Five features of VoIP
                    </Link>
                  </h3>
                  <div className={styles.bannerBtn}>
                    <Button type="link" url="/blog-post" text="Read More" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  Single Banner  */}
          {/* Start Single Banner  */}
          <div className="col-12 col-sm-6 col-lg-3 sm__mt--40 md__mt--40">
            <div className={`${styles.banner} ${styles.b11}`}>
              <div className={styles.thumb}>
                <img
                  src={require("./../../../assets/images/blog/bn3.png")}
                  alt="voopo voip"
                />
              </div>
              <div className={styles.hoverAction}>
                <div className={styles.bannerContent}>
                  <span>Tracking</span>
                  <h3>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Usefulness of VoIP
                    </Link>
                  </h3>
                  <div className={styles.bannerBtn}>
                    <Button type="link" url="/blog-post" text="Read More" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End  Single Banner  */}
        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;
