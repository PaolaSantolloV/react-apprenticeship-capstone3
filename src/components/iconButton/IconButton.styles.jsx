import styled from "styled-components";

export const StyledIconButton = styled.button`
  background-color: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};
  outline: none;
  z-index: 3;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  padding: 0;
  margin-right: 5px;
`;

export const StyledLabelIconButton = styled.p`
  font-size: small;
  font-weight: 300;
  color: ${(props) => props.color};
`;

export const StyledContainerIconButton = styled.h2`
  display: inline-flex;
`;
