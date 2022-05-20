import { useState } from "react";
import Pads from "./Pads";

const DrumMachine = () => {
  const [soundText, setSoundText] = useState("");
  return (
    <div id="drum-machine">
      <div id="display">{soundText}</div>
      <Pads setSoundText={setSoundText} />
    </div>
  );
};
export default DrumMachine;
