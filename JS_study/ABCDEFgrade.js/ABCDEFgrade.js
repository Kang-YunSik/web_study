"use restrict";
let grade = 85;
// JS에는 자료형 타입이 따로 존재하지 않기 때문에. / 연산시 실수가 리턴된다.
console.log(`${grade - (grade % 10)}`);

switch (grade - (grade % 10)) {
  case 100:
    console.log("A+");
    break;
  case 90:
    console.log("A");
    break;
  case 80:
    console.log("B");
    break;
  case 70:
    console.log("C");
    break;
  case 60:
    console.log("D");
    break;
  case 50:
    console.log("E");
    break;
  default:
    console.log("F");
    break;
}
