const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
let N = Number(input);
let small = 0;
let big = 0;

while (true) {
  if (N < 0) {
    console.log(-1);
    break;
  }
  if (N % 5 === 0) {
    big = N / 5;
    console.log(big + small);
    break;
  }
  N = N - 3;
  small = small + 1;
}
