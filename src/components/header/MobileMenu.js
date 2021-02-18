import PropTypes from "prop-types";
import React, { useEffect } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";
import { IoMdClose } from "react-icons/io";

const MobileMenu = ({ styles }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      `.${styles.subMenu}`
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        `<span class=${styles.menuExpand}><i></i></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(`.${styles.menuExpand}`);
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle(styles.active);
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove(styles.active);
  };

  return (
    <div className={styles.offcanvasMobileMenu} id="offcanvas-mobile-menu">
      <button
        className={styles.offcanvasMenuClose}
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <IoMdClose />
      </button>
      <div className={styles.offcanvasWrapper}>
        <div className={styles.offcanvasInnerContent}>
          {/* mobile search */}
          <MobileMenuSearch />

          {/* mobile nav menu */}
          <MobileNavMenu styles={styles} />

          {/* mobile widgets */}
          <MobileWidgets styles={styles} />
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  styles: PropTypes.object
};

export default MobileMenu;
