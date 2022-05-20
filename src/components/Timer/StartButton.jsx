import React from "react";

const StartButton = (props) => {
  //   const setS = () => {
  //     props.setStart(!props.start);

  //   };
  return (
    <div>
      <button id="start_stop" onClick={props.onClick}>
        start
      </button>
    </div>
  );
};

export default StartButton;
