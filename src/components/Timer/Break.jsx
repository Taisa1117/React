export const Break = (props) => {
  const breakIncrement = () => {
    props.setBreakTime((prevbTime) => {
      if (!props.pause) return prevbTime;
      if (prevbTime === 60) return 60;
      return prevbTime + 1;
    });
  };
  const breakDecrement = () => {
    props.setBreakTime((prevbTime) => {
      if (!props.pause) return prevbTime;
      if (prevbTime === 1) return 1;
      return prevbTime - 1;
    });
  };
  return (
    <div id="break">
      <p id="break-label">Break Length</p>
      <div id="updown">
        <button onClick={() => breakIncrement(props.time)} id="break-increment">
          +
        </button>
        <div id="break-length">{props.time}</div>
        <button onClick={() => breakDecrement(props.time)} id="break-decrement">
          -
        </button>
      </div>
    </div>
  );
};
