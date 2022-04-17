import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav className="justify-content-center">
        <NavMenu>
          <NavLink to="/local" activeStyle>
            Local
          </NavLink>
          <NavLink to="/world" activeStyle>
            World
          </NavLink>
          <NavLink to="/news" activeStyle>
            News
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;