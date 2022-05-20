import React from "react";

export const ResetButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick} id="reset">
        Reset
      </button>
    </div>
  );
};
