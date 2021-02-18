import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../containers/headers/headerOne";
import Footer from "../containers/footers/footerOne";

const LayoutOne = ({ children, footerBg }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer footerBg={footerBg} />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  footerBg: PropTypes.string
};

export default LayoutOne;
