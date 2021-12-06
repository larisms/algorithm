const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let N = Number(input[i]+1);
  let N2 = Number(input[i] * 2);
  console.log(N, N2);
  while(true){
    if(N<N2){
      
    }
  }
}
