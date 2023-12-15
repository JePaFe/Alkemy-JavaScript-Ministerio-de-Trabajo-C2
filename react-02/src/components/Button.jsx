import React from "react";

function Button({ fnClick }) {
  return (
    <button type="button" onClick={fnClick}>
      Click
    </button>
  );
}

export default Button;
