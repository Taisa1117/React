import { useCallback, useEffect, useState } from "react";

const DrumPad = (props) => {
  //パッドひとつに注目
  const playsound = () => {
    const sound = document.getElementById(props.id);
    sound.currentTime = 0;
    sound.play();
    // display表示
    props.setSoundText(props.keytext);
  };

  const [keydown, setKeydown] = useState(false);
  const handleKeyDown = useCallback((event) => {
    if (event.keyCode === props.keycode) {
      //   console.log(props.keytext);
      props.setSoundText(props.keytext);
      playsound();
      setKeydown(false);
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
  }, [keydown, handleKeyDown]);

  return (
    <div className="drum-pad" id={props.keytext}>
      <button onClick={playsound}>
        <audio className="clip" id={props.id} src={props.url}></audio>
        {props.id}
      </button>
    </div>
  );
};
export default DrumPad;
