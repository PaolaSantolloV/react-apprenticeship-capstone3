import styled from "styled-components";

export const StyledFormNoteContainer = styled.div`
  background-color: #ffffff;
  border-radius: 2px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 35px;
`;

export const StyledTextarea = styled.textarea`
  padding-left: 5px;
  border: 2px solid;
  border-color: #f2f2f2;
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

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  height: 40px;
`;

export const StyledColorWrapper = styled.div`
  padding-top: 20px;
  padding-right: 9px;
  justify-content: right;
  display: flex;
`;

export const StyledLabelError = styled.p`
  font-size: x-small;
  font-weight: 100;
  color: red;
  margin-top: 6px;
`;
