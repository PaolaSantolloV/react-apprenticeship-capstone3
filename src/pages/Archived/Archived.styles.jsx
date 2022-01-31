import styled from "styled-components";

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
  position: absolute;
  width: 100%;
  top: 20%;
`;

export const StyledLabelError = styled.h2`
  font-size: medium;
  font-weight: 200;
  color: #613dc1;
`;
