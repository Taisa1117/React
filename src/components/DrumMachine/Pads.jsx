import React from "react";
import DrumPad from "./DrumPad";

const pad1 = [
  {
    keyCode: 81,
    keyButton: "Q",
    keytext: "Q sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyButton: "W",
    keytext: "W sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyButton: "E",
    keytext: "E sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyButton: "A",
    keytext: "A sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyButton: "S",
    keytext: "S sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyButton: "D",
    keytext: "D sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyButton: "Z",
    keytext: "Z sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyButton: "X",
    keytext: "X sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyButton: "C",
    keytext: "C sound1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
const Pads = (props) => {
  const pads = pad1.map((ele) => {
    return (
      <DrumPad
        keycode={ele.keyCode}
        key={ele.keyButton}
        id={ele.keyButton}
        keytext={ele.keytext} //一意のid 3
        url={ele.url} //audioのsrc要素
        setSoundText={props.setSoundText}
      ></DrumPad>
    );
  });
  return (
    <div>
      <div>{pads}</div>
    </div>
  );
};
export default Pads;
