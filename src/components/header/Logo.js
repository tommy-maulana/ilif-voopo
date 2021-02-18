import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/voopo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img src={logo} alt="voopo" className="img-fluid" />
      </Link>
    </div>
  );
};

export default Logo;
