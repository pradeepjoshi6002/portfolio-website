import React from "react";
import { Link } from "react-router-dom";
const NavbarLi = ({ children }) => {
  return (
    <li className="cursor-pointer active:text-yellow-300">
      <Link to={children == "home" ? "/" : children}>{children}</Link>
    </li>
  );
};

export default NavbarLi;
