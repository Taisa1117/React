export const Session = (props) => {
  const sessionIncrement = () => {
    props.setSessionTime((prevbTime) => {
      if (!props.pause) return prevbTime;
      if (prevbTime === 60) return 60;
      return prevbTime + 1;
    });
  };
  const sessionDecrement = () => {
    props.setSessionTime((prevbTime) => {
      if (!props.pause) return prevbTime;
      if (prevbTime === 1) return 1;
      return prevbTime - 1;
    });
  };
  return (
    <div id="session">
      <p id="session-label">Session Length</p>
      <div id="updown">
        <button
          onClick={() => sessionIncrement(props.time)}
          id="session-increment"
        >
          +
        </button>
        <div id="session-length">{props.time}</div>
        <button
          onClick={() => sessionDecrement(props.time)}
          id="session-decrement"
        >
          -
        </button>
      </div>
    </div>
  );
};
