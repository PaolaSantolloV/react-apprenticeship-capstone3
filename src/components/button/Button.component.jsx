import React from "react";

// eslint-disable-next-line react/prop-types
function Button({ title, label, onClick }) {
  return (
    <button title={title} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
