import styled from "styled-components";

export const StyledWrapperAdd = styled.div`
  justify-content: right;
  display: flex;
`;

export const StyledWrapperNotes = styled.div`
  display: -webkit-inline-box;
  flex-flow: row wrap;
  display: inline-flex;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const StyledWrapperError = styled.div`
  display: flex;
  width: 100%;
  top: 20%;
`;

export const StyledLabelError = styled.h2`
  font-size: medium;
  font-weight: 200;
  color: ${({ theme }) => theme.text};
`;
