import React, { useState } from "react";
import ButtonPanels from "./ButtonPanels";
import calculate from "./calculate";
import Display from "./Display";

export default function Calc() {
  const initialState = {
    //   画面に表示する数字で、２桁以上にする時に文字列にする必要がある
    currentNum: "0",
    // prevNumは計算に必要なすうじのこと
    prevNum: 0,
    operator: null,
    clear: false,
  };
  const [state, setState] = useState(Object.create(initialState));
  const buttonHandler = (kindOfButton) => {
    //   calculateで状態を返してセットする参照渡しにしなければstateが変更されたとみなされない
    setState(calculate(kindOfButton, Object.create(state)));
    console.log(state);
  };

  return (
    <React.Fragment>
      <Display state={state.currentNum} />
      <ButtonPanels buttonHandler={buttonHandler} />
    </React.Fragment>
  );
}
