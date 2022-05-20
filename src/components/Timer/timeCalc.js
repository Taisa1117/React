// 受け取るのは秒数
export const timeCalc = (time) => {
  let minute = Math.floor(time / 60);
  let second = time - minute * 60;
  second = second < 10 ? "0" + second : second;
  minute = minute < 10 ? "0" + minute : minute;
  return minute + ":" + second;
};
