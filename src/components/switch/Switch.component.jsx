import React from "react";

// eslint-disable-next-line react/prop-types
function Switch({ isOn, handleToggle, label }) {
  return (
    <div title="switch">
      {label && <h4 title="label">{label}</h4>}
      <label>
        <input checked={isOn} onChange={handleToggle} />
        <span />
      </label>
    </div>
  );
}

export default Switch;
