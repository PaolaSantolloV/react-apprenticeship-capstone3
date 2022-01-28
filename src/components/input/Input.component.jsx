import React from "react";
import { StyledInput, StyledLabelInput } from "./Input.styles";

// eslint-disable-next-line react/prop-types
function Input({ label, placeholder, type, id, onChange, value, title }) {
  return (
    <>
      {label && <StyledLabelInput>{label}</StyledLabelInput>}
      <StyledInput
        className="input"
        placeholder={placeholder}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        title={title}
      />
    </>
  );
}

export default Input;
