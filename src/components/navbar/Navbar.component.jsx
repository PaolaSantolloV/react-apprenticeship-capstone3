import React from "react";
import Input from "../input/Input.component";
import Button from "../button/Button.component";

// eslint-disable-next-line react/prop-types
function Navbar({ onChange, value, onClick }) {
  return (
    <div title="navbar">
      <Input
        placeholder="Search"
        type="text"
        onChange={onChange}
        value={value}
        title="search"
      />
      <Button title="button-search" label="Search" onClick={onClick} />
    </div>
  );
}
export default Navbar;
