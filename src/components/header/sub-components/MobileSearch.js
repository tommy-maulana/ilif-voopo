import React from "react";
import { IoIosSearch } from "react-icons/io";
import styles from "./MobileSearch.module.scss";

const MobileSearch = () => {
  return (
    <div className={styles.offcanvasMobileSearchArea}>
      <form action="#">
        <input type="search" placeholder="Search ..." />
        <button type="submit">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};

export default MobileSearch;
