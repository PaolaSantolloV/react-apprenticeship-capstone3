import React, { useState } from "react";
import Input from "../input/Input.component";
import Menu from "../menu/Menu.component";
import { StyledNavbarContainer, StyledWrapperNavbar } from "./Navbar.styles";
import { useGlobalContext } from "../../providers/Global/Global.provider";

// eslint-disable-next-line react/prop-types
function Navbar() {
  const { search } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.currentTarget.value);
    search(event.currentTarget.value);
  };

  return (
    <StyledNavbarContainer title="navbar">
      <Menu />
      <StyledWrapperNavbar>
        <Input
          placeholder="Search"
          type="text"
          title="search"
          border="#ffffff"
          onChange={(event) => handleChange(event)}
          value={inputValue}
        />
      </StyledWrapperNavbar>
    </StyledNavbarContainer>
  );
}
export default Navbar;
