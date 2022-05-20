import React, { useState } from "react";
import { Board } from "./Board";
import { CalcWinner } from "./CaicWinner";

export const Game = () => {
  const [history, sethistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setxIsNext] = useState(true);
  const [step, setstep] = useState(0);

  const current = history[history.length - 1];
  const winner = CalcWinner(current.squares);

  const handleClick = (i) => {
    const history = history.slice(0, step + 1);
    const current = history[step];
    const sqs = current.squares.slice();
    if (CalcWinner(sqs) || sqs[i]) {
      return;
    }
    sqs[i] = xIsNext ? "X" : "O";
    sethistory([
      {
        history: history.concat([
          {
            squares: sqs,
          },
        ]),
      },
    ]);
    setxIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setstep(step);
    if (step % 2 === 0) {
      setxIsNext(true);
    } else {
      setxIsNext(false);
    }
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li>
        <button onClick={() => jumpTo(move)} key={move}>
          {desc}
        </button>
      </li>
    );
  });

  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
