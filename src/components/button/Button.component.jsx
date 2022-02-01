import React from "react";
import { StyledButtonContainer } from "./Button.styles";

// eslint-disable-next-line react/prop-types
function Button({ title, label, onClick }) {
  return (
    <StyledButtonContainer title={title} onClick={onClick}>
      {label}
    </StyledButtonContainer>
  );
}

export default Button;
