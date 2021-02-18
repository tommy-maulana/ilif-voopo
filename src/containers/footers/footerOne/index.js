import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { IoLogoTwitter, IoLogoVimeo, IoLogoPinterest } from "react-icons/io";
import { MdExpandLess } from "react-icons/md";
import styles from "./Footer.module.scss";
import logo from "../../../assets/images/logo/voopo.png";
import logoDark from "../../../assets/images/logo/v2.png";

const Footer = ({ footerBg }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area ${footerBg === "white" ? styles.footer2 : ""}`}
    >
      <div
        className={`${styles.footerTop} ${
          footerBg === "white" ? "bg--cart-7" : "bg--cart-2"
        }`}
      >
        <div className="container">
          <div className="row">
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={styles.singleWidget}>
                <div className={styles.logo}>
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={footerBg === "white" ? logoDark : logo}
                      alt="voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <p>
                    There are variations of passages of Lorem Ipsum available,
                    the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-2 offset-lg-1 xs__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Help Line</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Cloud Phone Service
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Media Relation
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Business Program
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Home Service</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Service Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Voopo Info</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Why Voopo</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Voopo Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      VoIP Features
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>About us</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Resources</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Voopo Support
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Customer Center
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Blogs</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Home Service</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Live Chat</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
          </div>
        </div>
      </div>
      <div
        className={`${styles.copyright}  ${
          footerBg === "white" ? "bg--cart-8" : "bg--cart-3"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <div className={styles.copyrightInner}>
                <p>Copyright © All right reseved</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className={styles.ftSocialLink}>
                <ul className={styles.socialIcon}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      <IoLogoTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      <IoLogoVimeo />
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      <IoLogoPinterest />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

Footer.propTypes = {
  footerBg: PropTypes.string
};

export default Footer;
