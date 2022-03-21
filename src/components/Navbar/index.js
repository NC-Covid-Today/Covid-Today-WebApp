import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/index" activeStyle>
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle>
            News
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;