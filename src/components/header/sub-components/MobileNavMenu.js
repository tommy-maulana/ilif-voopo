import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ styles }) => {
  return (
    <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
      <ul>
        <li className={styles.menuItemHasChildren}>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          <ul className={`${styles.subMenu}`}>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-one"}>
                Home Version One
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-two"}>
                Home Version Two
              </Link>
            </li>
          </ul>
        </li>

        <li className={styles.menuItemHasChildren}>
          <Link to={process.env.PUBLIC_URL + "/service"}>Service</Link>
          <ul className={`${styles.subMenu}`}>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service"}>Service</Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/service-details-left-sidebar"}
              >
                Service Details Left Sidebar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-details"}>
                Service Details Right Sidebar
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
        <li className={styles.menuItemHasChildren}>
          <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
          <ul className={`${styles.subMenu}`}>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-left-sidebar"}>
                Blog Left Sidebar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog"}>
                Blog Right Sidebar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-post-left-sidebar"}>
                Blog Post Left Sidebar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                Blog Post Right Sidebar
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
