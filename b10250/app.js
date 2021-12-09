const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let H = Number(input[i].split(" ")[0]);
  let N = Number(input[i].split(" ")[2]);

  let F = N % H === 0 ? H : N % H;
  let R = Number.isInteger(N / H) ? N / H : Math.ceil(N / H);

  if (R < 10) {
    console.log(`${F}0${R}`);
  } else {
    console.log(`${F}${R}`);
  }
}
