import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  margin-top: 9px;
  background-color: ${({ theme }) => theme.primary};
`;

export const StyledIconButton = styled.button`
  border: 0;
  background-color: transparent;
  outline: none;
  z-index: 1;
`;

export const StyledMenuItemContainer = styled.div`
  top: 0;
  margin-left: -15px;
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  width: 25%;
  padding-top: 5px;
  height: 100%;
  border: none;
  z-index: 1;
  text-align: justify;
  font-size: x-small;
  padding-left: 20px;
  padding-right: 20px;
  color: #ffffff;

  @media (max-width: 600px) {
    width: 40%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.h2`
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const Divider = styled.hr`
  border-color: ${({ theme }) => theme.primary};
`;

export const Icon = styled.p`
  padding-right: 30px;
`;
