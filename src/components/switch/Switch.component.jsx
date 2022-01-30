import React from "react";
import {
  StyledInput,
  StyledSpan,
  StyledSwitch,
  StyledWrapper,
} from "./Switch.styles";

// eslint-disable-next-line react/prop-types
function Switch({ isOn, handleToggle, label }) {
  return (
    <StyledWrapper title="switch">
      <StyledSwitch>
        <StyledInput checked={isOn} onChange={handleToggle} />
        <StyledSpan />
      </StyledSwitch>
      {label && <h2 title="label">{label}</h2>}
    </StyledWrapper>
  );
}

export default Switch;
