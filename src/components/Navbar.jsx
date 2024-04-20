import React from "react";
import NavbarLi from "./NavbarLi";

const Navbar = () => {
  return (
    <nav className="flex bg-black text-white justify-end pr-[10vw] py-[2vh] uppercase">
      <ul className="flex gap-6">
        {Array.from(["home", "articles", "projects", "contact"]).map(
          (val, indx) => (
            <NavbarLi key={indx}>{val}</NavbarLi>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
