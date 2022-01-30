/* eslint-disable react/prop-types */
import React from "react";
import {
  StyledContainerIconButton,
  StyledIconButton,
  StyledLabelIconButton,
} from "./IconButton.styles";

function IconButton({
  title,
  children,
  onClick,
  backgroundColor,
  border,
  text,
}) {
  return (
    <StyledContainerIconButton>
      <StyledIconButton
        title={title}
        onClick={onClick}
        background={backgroundColor}
        border={border}
      >
        {children}
      </StyledIconButton>
      {text && (
        <StyledLabelIconButton title="icon-text" color={border}>
          {text}
        </StyledLabelIconButton>
      )}
    </StyledContainerIconButton>
  );
}

export default IconButton;
