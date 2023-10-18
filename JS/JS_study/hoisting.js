"use strict";
// 변수 호이스팅
console.log(text); // (출력. 호이스팅으로 변수 선언이 끌어올려졌다. 하지만, 정의는 끌어 올려지지 않아서 변수의 값은 읽지 못한다.)
text = "Hanamon!"; // (정의)
var text; // (변수 선언)
console.log(text); // (출력. 선언과 정의가 모두 상단에서 수행됐기 때문에, Hanamon!이 출력된다. )

// 함수 호이스팅
foo1(); // 함수 선언문에서는 호이스팅 일어난다.
foo2(); // 함수 표현식이라서 호이스팅 안된다.
function foo1() {
  console.log("Hello");
}
var foo2 = function () {
  console.log("world");
};
