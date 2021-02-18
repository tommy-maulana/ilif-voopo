import React from "react";
import BlogSidebar from "../blog-sidebar";
import styles from "./PostDetailsWithSidebar.module.scss";

const PostDetailsWithSidebar = ({ sidebarPosition }) => {
  return (
    <div className="blog__details__area pt--120 pb--110 bg--white">
      <div className="container">
        <div className="row">
          <div
            className={`col-12 col-lg-9 col-xl-8 ${
              sidebarPosition && sidebarPosition === "left"
                ? "order-1 order-lg-2 offset-xl-1"
                : ""
            }`}
          >
            <div className={styles.blDetailsInner}>
              <div className={styles.thumb}>
                <img
                  src={require("./../../../assets/images/blog/big-img.png")}
                  alt="voip voopo"
                />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.author}>
                  <img
                    src={require("./../../../assets/images/blog/author.png")}
                    alt="voip voopo"
                  />
                  <div className={styles.authorInfo}>
                    <h6>Dorothy Wright</h6>
                    <span>Voip Service Provider</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.{" "}
                </p>
                <h2 className={styles.blTitle}>Satellite Info</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.{" "}
                </p>
              </div>
              <ul className={styles.blList}>
                <li>
                  <img
                    src={require("./../../../assets/images/blog/list1.png")}
                    alt="voip voopo"
                  />
                </li>
                <li>
                  <img
                    src={require("./../../../assets/images/blog/list2.png")}
                    alt="voip voopo"
                  />
                </li>
              </ul>
              <div className={styles.blogContent}>
                <h2 className={styles.blTitle}>Internet Support</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
                <blockquote>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-lg-3 col-xl-3 sm__mt--40 md__mt--40 ${
              sidebarPosition && sidebarPosition === "left"
                ? "order-2 order-lg-1"
                : "offset-xl-1"
            }`}
          >
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsWithSidebar;
