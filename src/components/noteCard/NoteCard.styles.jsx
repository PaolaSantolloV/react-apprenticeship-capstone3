import styled from "styled-components";

export const StyledNoteContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  width: 150px;
  border-radius: 2px;
  height: 150px;
  box-shadow: 0px 0px 15px 1px ${({ theme }) => theme.shadow};
  margin: 10px;
`;

export const StyledLabel = styled.p`
  padding-right: 12px;
  padding-left: 12px;
  padding-buttom: 12px;
  margin: 0;
  text-align: justify;
  font-size: small;
  font-weight: 100;
  color: ${({ theme }) => theme.text};
`;

export const StyledColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  margin-top: 3px;
  background-color: ${(props) => props.color};
`;

export const StyledWrapperColor = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 12px;
  padding-top: 12px;
`;

export const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 3;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-right: 5px;
`;
