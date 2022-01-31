import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding-left: 10px;
  height: 50px;
  display: flex;
  border-bottom: #c8c8c8;
  box-shadow: 5px 4px 4px -1px ${({ theme }) => theme.shadow};
`;

export const StyledWrapperNavbar = styled.div`
  margin-left: 20px;
  display: flex;
  margin-top: 10px;
`;
