// 템플릿 연산자 특징 2가지
// 1 . 코드 그대로 출력(줄바꿈 포함)
let str2 = `문자열(")
작은따옴표(')
줄바꿈`;
console.log(str2);

// 2. ${}로 변수 또는 수식 입력 가능
let num1 = 10;
let num2 = 0.1;
let str3 = `${num1}과 ${num2}을 곱하면 ${num1 * num2}이다`;
console.log(str3);
