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
  textColor,
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
        <StyledLabelIconButton title="icon-text" color={textColor}>
          {text}
        </StyledLabelIconButton>
      )}
    </StyledContainerIconButton>
  );
}

IconButton.defaultProps = {
  border: "transparent",
  backgroundColor: "transparent",
};
export default IconButton;
