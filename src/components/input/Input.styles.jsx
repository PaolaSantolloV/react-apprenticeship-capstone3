import styled from "styled-components";

export const StyledInput = styled.input`
  height: 29px;
  padding-left: 5px;
  border-color: #e9e9e9;
  border-radius: 5px;
  border-style: solid;
  color: #613dc1;
  outline: none;

  :placeholder {
    color: #e9e9e9;
  }

  :focus-visible {
    border-color: #613dc1;
  }
`;

export const StyledLabelInput = styled.p`
  font-weight: lighter;
  font-size: smaller;
  margin-bottom: 8px;
`;
