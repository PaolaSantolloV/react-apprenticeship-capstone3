import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "../switch/Switch.component";
import { FiMenu, FiX, FiFileText, FiArchive, FiLogOut } from "react-icons/fi";
import IconButton from "../iconButton/IconButton.component";
import {
  Divider,
  Icon,
  StyledLabel,
  StyledMenu,
  StyledMenuItemContainer,
} from "./Menu.styles";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../providers/Auth/Auth.provider";

// eslint-disable-next-line react/prop-types
function Menu() {
  const { logout } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);
  const handleCloseMenu = () => setShowMenu(false);
  const handleLogout = () => {
    useLogout();
    logout();
  };

  return (
    <StyledMenu title="menu">
      {!showMenu && (
        <IconButton
          backgroundColor="transparent"
          border="transparent"
          onClick={handleMenu}
        >
          <FiMenu color="#613dc1" size="30px" />
        </IconButton>
      )}
      {showMenu === true && (
        <StyledMenuItemContainer>
          <IconButton
            backgroundColor="transparent"
            border="transparent"
            onClick={handleMenu}
          >
            <FiX color="#ffffff" size="30px" />
          </IconButton>
          <StyledLabel>UserInfo</StyledLabel>
          <Divider />
          <Switch label="Dark mode" />
          <Divider />
          <Link
            to="/notes"
            onClick={handleCloseMenu}
            style={{ textDecoration: "none" }}
          >
            <StyledLabel title="notes">
              <Icon>
                <FiFileText color="#ffffff" size="20px" />
              </Icon>
              Notes
            </StyledLabel>
          </Link>
          <Link
            to="/notes/archived"
            onClick={handleCloseMenu}
            style={{ textDecoration: "none" }}
          >
            <StyledLabel title="archived">
              <Icon>
                <FiArchive color="#ffffff" size="20px" />
              </Icon>
              Archived
            </StyledLabel>
          </Link>
          <Divider />
          <Link
            to="/"
            onClick={handleLogout}
            style={{ textDecoration: "none" }}
          >
            <StyledLabel title="logout">
              <Icon>
                <FiLogOut color="#ffffff" size="20px" />
              </Icon>
              Logout
            </StyledLabel>
          </Link>
        </StyledMenuItemContainer>
      )}
    </StyledMenu>
  );
}

export default Menu;
