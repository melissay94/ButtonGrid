import React from "react";
import { Navbar, Nav, NavbarText, NavItem, NavLink } from "reactstrap";

function Footer() {
  return(
    <Navbar color="dark" dark>
      <NavbarText>Copyright © 2020, Melissa Young</NavbarText>
      <Nav>
        <NavItem>
          <NavLink href="https://github.com/melissay94/ButtonGrid">ButtonGrid GitHub</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://linkedin.com/in/melissadcyoung/">My LinkedIn</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Footer;
