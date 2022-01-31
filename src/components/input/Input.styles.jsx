import styled from "styled-components";

export const StyledInput = styled.input`
  height: 29px;
  padding-left: 5px;
  border-color: ${(props) => props.border};
  border-radius: 5px;
  border-style: solid;
  color: ${({ theme }) => theme.textWhite};
  outline: none;
  background-color: transparent;

  :placeholder {
    color: ${({ theme }) => theme.textWhite};
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
