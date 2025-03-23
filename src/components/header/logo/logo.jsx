import React from "react";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="navbar__logo">
      <Link to="/"><img src={logo} alt="Logo Filmin"/></Link>
    </div>
  );
};

export default Logo;