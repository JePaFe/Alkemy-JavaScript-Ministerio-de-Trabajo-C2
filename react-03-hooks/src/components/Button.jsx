import React from "react";

function Button({ fnIncrementar }) {
  return (
    <button type="button" onClick={fnIncrementar}>
      Incrementar
    </button>
  );
}

export default Button;
