import React from "react";
import Navbar from "../navbar/Navbar.component";
import { StyledLayout } from "./Layout.styles";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <StyledLayout title="layout">{children}</StyledLayout>
    </>
  );
}

export default Layout;
