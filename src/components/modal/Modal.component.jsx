import React from "react";
import { FiX } from "react-icons/fi";
import IconButton from "../iconButton/IconButton.component";
import {
  StyledModal,
  StyledModalMain,
  StyledWrapper,
} from "./Modal.styles.jsx";

// eslint-disable-next-line react/prop-types
function Modal({ handleClose, show, title, children }) {
  const showHideClassName = show ? "block" : "none";

  return (
    <StyledModal title={title} display={showHideClassName}>
      <StyledModalMain>
        <StyledWrapper>
          <IconButton
            title="closeWindow"
            backgroundColor="transparent"
            border="transparent"
            onClick={handleClose}
          >
            <FiX color="#a6a6a6" size="20px" />
          </IconButton>
        </StyledWrapper>
        {children}
      </StyledModalMain>
    </StyledModal>
  );
}

export default Modal;
