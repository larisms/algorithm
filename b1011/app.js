const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let X = input[i].split(" ")[0];
  let Y = input[i].split(" ")[1];
  // X 에서 Y 까지의 거리
  let lightYear = Y - X;
  let cnt = 0;
  // 거리의 제곱근을 내림처리 후 정수에 해당하는 부분이 한번에 움직일 수 있는 최대치와 같음
  // 예를 들어 거리가 4 인 경우, 1 2 1 로 최대치는 2 이동은 3회
  // 예를 들어 거리가 8 인 경우, 1 2 2 2 1 로 최대치는 2 이동은 5회
  // 예를 들어 거리가 9 인 경우, 1 2 3 2 1 로 최대치는 3 이동은 5회
  // 예를 들어 거리가 12 인 경우, 1 2 3 3 2 1 로 최대치는 3 이동은 6회
  // 예를 들어 거리가 13 인 경우, 1 2 3 3 2 1 1 로 최대치는 3 이동은 7회 (12의 경우보다 이동이 1회많음)
  // => 거리의 제곱근이 정수로 떨어지는 (4, 9, 16 ...) 기준점이 되는 거리에 각 제곱근을 더한만큼이 거리가 될때까지,
  //    이동의 횟수가 같음
  // =>> 기준거리가 9인 경우 이동은 5회, 이후 10, 11, 12(기준거리 + 기준거리의 제곱근)까지는 이동이 6회
  // 예를 들어 거리가 16 인 경우, 1 2 3 4 3 2 1 로 최대치는 4 이동은 7회
  // 각각 거리의 제곱근이 정수로 떨어질때 최대치의 변화가 있음을 확인
  let max = Math.floor(Math.sqrt(lightYear));
  if (max === Math.sqrt(lightYear)) {
    //거리의 제곱근이 정수로 떨어지고 최대치와 같을때
    //거리가 9이면 최대치 3에 2를 곱하고 1을 뺀 값이 이동 횟수
    cnt = 2 * max - 1;
  } else if (lightYear <= max * max + max) {
    //거리가 최대치의 제곱에 최대치만큼을 더한 수 이하일 때
    cnt = 2 * max;
  } else {
    //그 외 나머지 경우
    cnt = 2 * max + 1;
  }
  console.log(cnt);
}
