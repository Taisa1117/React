// ボタンの種類と、状態を渡して実際の計算を行う
export default function calculate(kindOfButton, state) {
  //kindOfButtonを判断し、それらを処理する関数
  //   数字だったとき、２桁以上にする
  const handleNum = (button, state) => {
    //   ＝と演算子ボタンが押されたらtrueになるため、数字が押されたらそれにおきかえる
    if (state.clear) {
      return {
        currentNum: button,
        prevNum: state.prevNum,
        operator: state.operator,
        clear: false,
      };
    }
    // 0のときは0を消して押されたボタンにする
    if (state.currentNum === "0") {
      return {
        currentNum: button,
        prevNum: state.prevNum,
        operator: state.operator,
        clear: false,
      };
    }
    return {
      //   二桁以上にするときの処理
      currentNum: state.currentNum + button,
      prevNum: state.prevNum,
      operator: state.operator,
      clear: false,
    };
  };

  const operate = (state) => {
    const result = parseFloat(state.currentNum);
    if (state.operator === "+") {
      return state.prevNum + result;
    }
    if (state.operator === "-") {
      return state.prevNum - result;
    }
    if (state.operator === "x") {
      return state.prevNum * result;
    }
    if (state.operator === "/") {
      return state.prevNum / result;
    }
    return result;
  };

  //   演算子が押されたときの処理
  const handleOpe = (button, state) => {
    if (state.operator === null) {
      return {
        currentNum: state.currentNum,
        prevNum: parseFloat(state.currentNum),
        operator: button,
        // 演算子が押されたら、表示している数字を消すため
        clear: true,
      };
    }
    return {
      // 文字列にするため｀｀で囲む
      currentNum: state.checkNum,
      prevNum: state.prevNum,
      operator: button,
      clear: true,
    };
  };
  const handleEqual = (state) => {
    //   演算子がない状態だとそのまま返す
    if (state.operator === null) {
      return state;
    }
    const val = operate(state);
    return {
      currentNum: `${val}`,
      prevNum: 0,
      operator: null,
      clear: true,
    };
  };
  const handleDot = (state) => {
    //   .が入ってなかったら
    if (state.currentNum.indexOf(".") !== -1) {
      return state;
    } else {
      return {
        currentNum: state.currentNum + ".",
        prevNum: state.prevNum,
        operator: state.operator,
        clear: false,
      };
    }
  };
  //   ここまでが処理する関数

  // 数字かどうかのチェック
  const checkNum = /[0-9]/;
  if (checkNum.test(kindOfButton)) {
    return handleNum(kindOfButton, state);
  }
  //   演算子か判断
  const checkOpe = /[-|+|/|x]/;
  if (checkOpe.test(kindOfButton)) {
    return handleOpe(kindOfButton, state);
  }
  //   ACの時の処理
  if (kindOfButton === "AC") {
    return {
      currentNum: "0",
      prevNum: 0,
      operator: null,
      clear: false,
    };
  }
  //   ＝の確認
  if (kindOfButton === "=") {
    return handleEqual(state);
  }
  //   ドットの確認
  if (kindOfButton === ".") {
    return handleDot(state);
  }
  return state;
}
