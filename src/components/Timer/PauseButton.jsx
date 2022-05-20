import React from "react";

const PauseButton = (props) => {
  return (
    <div>
      <button id="start_stop" onClick={props.onClick}>
        {/* {props.pause ? "start" : "pause"} */}
        pause
      </button>
    </div>
  );
};

export default PauseButton;
