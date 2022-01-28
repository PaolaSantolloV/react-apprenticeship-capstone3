import React from "react";

// eslint-disable-next-line react/prop-types
function IconButton({ title, children, onClick }) {
  return (
    <button title={title} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;
