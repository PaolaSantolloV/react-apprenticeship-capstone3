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
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 15px;
`;

export const StyledWrapperColor = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 12px;
  padding-top: 12px;
`;
