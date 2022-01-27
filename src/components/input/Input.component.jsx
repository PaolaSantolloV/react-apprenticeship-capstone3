import React from "react";

// eslint-disable-next-line react/prop-types
function Input({ placeholder, type, id, onChange, value, title }) {
  return (
    <input
      className="input"
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      title={title}
    />
  );
}

export default Input;
