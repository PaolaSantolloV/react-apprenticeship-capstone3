import React from "react";
// import Input from "../input/Input.component";
// import Button from "../button/Button.component";
import Menu from "../menu/Menu.component";
import { StyledNavbarContainer } from "./Navbar.styles";

// eslint-disable-next-line react/prop-types
function Navbar() {
  return (
    <StyledNavbarContainer title="navbar">
      <Menu />
      {/* <Input
        placeholder="Search"
        type="text"
        onChange={onChange}
        value={value}
        title="search"
      />
      <Button title="button-search" label="Search" onClick={onClick} /> */}
    </StyledNavbarContainer>
  );
}
export default Navbar;
