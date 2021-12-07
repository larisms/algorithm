const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let U = Number(input[0].split(" ")[0]);
let D = Number(input[0].split(" ")[1]);
let H = Number(input[0].split(" ")[2]);
// 맨 마지막 정상에 도달했을때는 미끄러지는게 없으므로
// 실제 오르는 횟수에 카운트되는 거리는 총 높이 - 한번에 오르는높이
let cntH = H - U;
// 실제 카운트되는 거리에 미끄러짐 없이 하루만 더 올라가면 되기 때문에 +1
let cnt = Math.ceil(cntH / (U - D) + 1);

console.log(cnt);
