import styled from "styled-components";

export const StyledFormNoteContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 2px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 35px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const StyledTextarea = styled.textarea`
  padding-left: 5px;
  border: none;
  color: #613dc1;
  outline: none;
  background-color: ${({ theme }) => theme.body};

  :placeholder {
    color: ${({ theme }) => theme.shadow};
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
