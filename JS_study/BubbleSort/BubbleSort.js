"use restrict";
let arr = [7, 4, 5, 1, 3, 2, 9, 8, 10, 6];
let noSwaps;

for (let i = arr.length; i > 0; i--) {
  noSwaps = true;
  for (let j = 0; j < i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;

      noSwaps = false;
    }
  }
  if (noSwaps) break;
}
console.log("버블정렬완료: " + arr);
console.log("최소값: " + arr[0]);
console.log("최대값: " + arr[arr.length - 1]);

let sum = 0;
for (let i = 1; i < arr.length - 1; i++) {
  sum += arr[i];
}
console.log("올림픽 계산: " + sum);

let num = arr.length / 2;
let mean = 0;
if (num % 1 === 0) {
  // arr.length = 짝수 일 때 -> 중앙 index는 실수
  mean = (arr[num] + arr[num - 1]) / 2;
} else {
  // arr.length = 짝수 일 때 -> 중앙 index는 정수
  mean = arr[num - 1];
}
console.log(mean);
