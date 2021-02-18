import React from "react";
import styles from "./Navigation.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.mainMenu}>
        <li className={styles.drop}>
          <Link to={process.env.PUBLIC_URL + "/"}>
            Home <IoIosArrowDown />
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-one"}>
                Home version One
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-two"}>
                Home version Two
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.drop}>
          <Link to={process.env.PUBLIC_URL + "/service"}>
            Service <IoIosArrowDown />
          </Link>
          <ul className={styles.dropdownMenu}>
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
        <li className={styles.drop}>
          <Link to={process.env.PUBLIC_URL + "/blog"}>
            Blog <IoIosArrowDown />
          </Link>
          <ul className={styles.dropdownMenu}>
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

export default Navigation;
