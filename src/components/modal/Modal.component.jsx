import React from "react";
import IconButton from "../iconButton/IconButton.component";

// eslint-disable-next-line react/prop-types
function Modal({ handleClose, show, title, children }) {
  const showHideClassName = show ? "block" : "none";

  return (
    <div title={title} display={showHideClassName}>
      <section>
        <div>
          <IconButton title="closeWindow" onClick={handleClose}>
            <h4> close</h4>
          </IconButton>
        </div>
        {children}
      </section>
    </div>
  );
}

export default Modal;
