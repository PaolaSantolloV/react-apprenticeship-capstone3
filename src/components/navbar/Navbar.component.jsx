import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Input from "../input/Input.component";
import Menu from "../menu/Menu.component";
import {
  StyledNavbarContainer,
  StyledWrapperButton,
  StyledWrapperNavbar,
} from "./Navbar.styles";
import IconButton from "../iconButton/IconButton.component";

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
        <StyledWrapperButton>
          <IconButton title="search" text="Search" textColor="#ffffff">
            <BiSearchAlt color="#ffffff" size="20px" />
          </IconButton>
        </StyledWrapperButton>
      </StyledWrapperNavbar>
    </StyledNavbarContainer>
  );
}
export default Navbar;
