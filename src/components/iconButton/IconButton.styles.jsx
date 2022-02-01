import styled from "styled-components";

export const StyledIconButton = styled.button`
  background-color: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};
  outline: none;
  z-index: 3;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 25px;
  padding: 0;
  margin-right: 5px;
`;

export const StyledContainerIconButtonBorder = styled.div`
  border: 1px solid white;
  border-radius: 24px;
  justify-content: center;
  height: 24px;
  padding: 4px;
`;

export const StyledLabelIconButton = styled.p`
  font-size: small;
  font-weight: 300;
  margin-top: 2px;
  color: ${(props) => props.color};
`;

export const StyledContainerIconButton = styled.div`
  display: inline-flex;
`;
