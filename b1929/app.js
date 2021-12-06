const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let M = Number(input[0]);
let N = Number(input[1]);

//0부터 N 까지 true 로 배열 만들기
let arr = Array(N + 1).fill(true);

// 0 과 1 은 소수가 아니기 때문에 먼저 false 로 지정
arr[0] = false;
arr[1] = false;

function solution() {
  // 2부터 시작하고, N의 제곱근까지 i를 for문으로 돌린다
  // (어차피 제곱이 된다면 소수가 아니기 때문에 처음부터 i의 범위를 배열의 최대수인 N 의 제곱근까지로 한다)
  for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
    if (arr[i]) {
      //x 는 i에 곱해주는 수이고, N 이하까지 1씩 늘려서 곱하는 while 문을 활용해 해당하는 수를 false 로 변경
      let x = 2;
      while (i * x <= N) {
        arr[i * x] = false;
        x = x + 1; // x++ 로 바꿔 쓸 수 있다
      }
    }
  }
  const prime = [];
  for (let i = M; i <= N; i++) {
    // arr 의 i 번째가 true 인 값만 prime 배열에 담아주기
    if (arr[i]) {
      prime.push(i);
    }
  }
  //줄바꿈 추가....
  console.log(prime.join("\n"));
}
solution();
