import React from "react";
import { Link } from "react-router-dom";
const NavbarLi = ({ children }) => {
  return (
    <li className="cursor-pointer active:text-yellow-300">
      <Link to={children}>{children}</Link>
    </li>
  );
};

export default NavbarLi;
