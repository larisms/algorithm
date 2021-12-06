const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let M = Number(input[0]);
let N = Number(input[1]);
let arr = Array(N + 1).fill(true);

arr[0] = false;
arr[1] = false;

console.log(arr);
