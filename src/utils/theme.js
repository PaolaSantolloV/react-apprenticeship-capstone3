import { createGlobalStyle } from "styled-components";

/* istanbul ignore next */
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  a{
    color:${({ theme }) => theme.text};
  }
`;

export const lightTheme = {
  body: "#FFFAFA",
  text: "#858ae3",
  textWhite: "#ffffff",
  textGrey: "#e9e9e9",
  primary: "#858ae3",
  secondary: "#613dc1",
  shadow: "#e9e9e9",
  card: "#ffffff",
};

export const darkTheme = {
  body: "#1B2631",
  text: "#858ae3",
  textGrey: "#ffffff",
  textWhite: "#ffffff",
  primary: "#613dc1",
  secondary: "#858ae3",
  shadow: "#5A189A",
  card: "#1B2631",
};
