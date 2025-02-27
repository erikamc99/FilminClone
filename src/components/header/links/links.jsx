import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../dropmenu/dropmenu";

const Links = () => {
  return (
    <nav className="navbar__links">
      <Link to="/">Inicio</Link>
      <Link to="/construction" className="green-links">Cine</Link>
      <Link to="/construction" className="green-links">Series</Link>
      <DropdownMenu />
    </nav>
  );
};

export default Links;