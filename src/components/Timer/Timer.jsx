import React, { useState, useEffect } from "react";
import { Break } from "./Break";
import PauseButton from "./PauseButton";
import { ResetButton } from "./ResetButton";
import { Session } from "./Session";
import StartButton from "./StartButton";
import { timeCalc } from "./timeCalc";

export const Timer = () => {
  const initialState = {
    type: "Session",
    breakTime: 5,
    sessionTime: 25,
    time: 1500,
    pause: true,
    displayTime: "25:00",
  };
  const [type, setType] = useState(initialState.type);
  const [sessionTime, setSessionTime] = useState(initialState.sessionTime);
  const [breakTime, setBreakTime] = useState(initialState.breakTime);
  const [t, setT] = useState(initialState.time);
  let time = initialState.time;
  const [pause, setPause] = useState(initialState.pause);
  const [start, setStart] = useState(false);
  const [displayTime, setDisplayTime] = useState(initialState.displayTime);

  // const playsound = () => {
  //   const sound = document.getElementById("beep");
  //   sound.currentTime = 0;
  //   sound.play();
  // };

  // useEffect(() => {
  //   if (!pause || type === "Break") {
  //     return;
  //   }
  //   const sec = sessionTime * 60;
  //   setTime(sec);
  //   setDisplayTime(timeCalc(sec)); //timeにするとsetTimeした前の値が引数に取られる
  // }, [sessionTime]);

  // useEffect(() => {
  //   if (pause) {
  //     return;
  //   }
  //   const id = setInterval(() => {
  //     if (pause) {
  //       clearInterval(id);
  //       console.log("pause");
  //     }
  //     if (time === 0) {
  //       playsound();
  //       if (type === "Session") {
  //         setType("Break");
  //       } else {
  //         setType("Session");
  //       }
  //       setTime(breakTime * 60);
  //       setDisplayTime(timeCalc(breakTime * 60));
  //     }
  //     setTime((t) => t - 1);
  //     setDisplayTime(timeCalc(time));
  //   }, 1000);

  //   return () => clearInterval(id);
  // }, [pause, time, type, breakTime]);

  // const resetHandle = () => {
  //   console.log("reset");
  //   setType(initialState.type);
  //   setBreakTime(initialState.breakTime);
  //   setSessionTime(initialState.sessionTime);
  //   setTime(initialState.time);
  //   setPause(initialState.pause);
  //   setDisplayTime(initialState.displayTime);
  // };

  const interval = () => {
    // setStart(!start);
    accurateInterval(() => {
      setT((t) => t - 1);
      time--;
      console.log(t);
    }, 1000);
  };
  const accurateInterval = function (fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    wrapper = function () {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function () {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel,
    };
  };

  return (
    <>
      <div id="break-session">
        {/* <Break time={breakTime} setBreakTime={setBreakTime} pause={pause} /> */}
        {/* <Session
          time={sessionTime}
          setSessionTime={setSessionTime}
          pause={pause}
        /> */}
      </div>
      <div id="time-left">{displayTime}</div>
      <div id="timer-label">{type}</div>
      <div>
        <PauseButton onClick={() => setStart(!start)} />
        <StartButton onClick={interval} setStart={setStart} start={start} />
        {/* <ResetButton onClick={resetHandle} /> */}
      </div>
      <div id="audio">
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    </>
  );
};
//タイマーを動かして、typeもかえる
