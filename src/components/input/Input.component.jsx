/* eslint-disable react/prop-types */
import React from "react";
import { StyledInput, StyledLabelInput } from "./Input.styles";

function Input({
  label,
  placeholder,
  type,
  id,
  onChange,
  value,
  title,
  border,
}) {
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
        border={border}
      />
    </>
  );
}

Input.defaultProps = {
  border: "#f2f2f2",
};

export default Input;
