import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav className="justify-content-center">
        <NavMenu>
          <NavLink to="/index" activeStyle>
            Local
          </NavLink>
          <NavLink to="/about" activeStyle>
            World
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