import React from "react";
import Input from "../input/Input.component";
import Menu from "../menu/Menu.component";
import { StyledNavbarContainer, StyledWrapperNavbar } from "./Navbar.styles";

// eslint-disable-next-line react/prop-types
function Navbar() {
  return (
    <StyledNavbarContainer title="navbar">
      <Menu />
      <StyledWrapperNavbar>
        <Input
          placeholder="Search"
          type="text"
          title="search"
          border="transparent"
        />
      </StyledWrapperNavbar>
    </StyledNavbarContainer>
  );
}
export default Navbar;
