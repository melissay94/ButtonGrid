import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return(
    <Navbar color="dark" dark>
      <NavbarBrand tag={ Link } to="/">The Frustrating Buttons!</NavbarBrand>
    </Navbar>
  );
}

export default Header;
