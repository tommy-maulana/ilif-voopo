import PropTypes from "prop-types";
import React from "react";
import Button from "../UI/button";
import { IoIosMenu } from "react-icons/io";

const HeaderBtn = ({ styles }) => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add(styles.active);
  };
  return (
    <div className="header__btn text-right">
      <div className="desktop-button-wrapper d-none d-lg-block">
        <Button type="link" url="/" text="Buy Now" btnStyle="white" />
      </div>
      <div className={`${styles.mobileButtonWrapper} d-block d-lg-none`}>
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <IoIosMenu />
        </button>
      </div>
    </div>
  );
};

HeaderBtn.propTypes = {
  styles: PropTypes.object
};

export default HeaderBtn;
