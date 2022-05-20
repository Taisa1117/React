// import { useState } from "react";

export default function ButtonPanels(props) {
  return (
    <div>
      <div>
        <button id="one" onClick={() => props.buttonHandler("1")}>
          1
        </button>
        <button id="two" onClick={() => props.buttonHandler("2")}>
          2
        </button>
        <button id="three" onClick={() => props.buttonHandler("3")}>
          3
        </button>
        <button id="clear" onClick={() => props.buttonHandler("AC")}>
          AC
        </button>
      </div>
      <div>
        <button id="four" onClick={() => props.buttonHandler("4")}>
          4
        </button>
        <button id="five" onClick={() => props.buttonHandler("5")}>
          5
        </button>
        <button id="six" onClick={() => props.buttonHandler("6")}>
          6
        </button>
        <button id="multiply" onClick={() => props.buttonHandler("x")}>
          x
        </button>
      </div>
      <div>
        <button id="seven" onClick={() => props.buttonHandler("7")}>
          7
        </button>
        <button id="eight" onClick={() => props.buttonHandler("8")}>
          8
        </button>
        <button id="nine" onClick={() => props.buttonHandler("9")}>
          9
        </button>
        <button id="add" onClick={() => props.buttonHandler("+")}>
          +
        </button>
      </div>
      <div>
        <button id="subtruct" onClick={() => props.buttonHandler("-")}>
          -
        </button>
        <button id="zero" onClick={() => props.buttonHandler("0")}>
          0
        </button>
        <button id="divide" onClick={() => props.buttonHandler("/")}>
          /
        </button>
        <button id="decimal" onClick={() => props.buttonHandler(".")}>
          .
        </button>
        <button id="equals" onClick={() => props.buttonHandler("=")}>
          =
        </button>
      </div>
    </div>
  );
}
