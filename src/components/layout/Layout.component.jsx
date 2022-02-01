import React from "react";
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../../providers/Global/Global.provider";
import { GlobalStyles, lightTheme, darkTheme } from "../../utils/theme";
import Navbar from "../navbar/Navbar.component";
import { StyledLayout } from "./Layout.styles";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const { isDark } = useGlobalContext();
  return (
    <>
      <ThemeProvider theme={isDark === true ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar />
        <StyledLayout title="layout">{children}</StyledLayout>
      </ThemeProvider>
    </>
  );
}

export default Layout;
