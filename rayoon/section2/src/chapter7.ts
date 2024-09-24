//void = 공허 = 아무것도 없다.
// -> 아무것도 없음을 의미하는 타입.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;
// undefined 말고는 어떠한 값도 넣을 수 없음

//never
//never = 존재하지 않는 = 불가능한 타입

function func3(): never {
  while (true) {}
}
// 절대로 정상적으로 종료될 수 없어서 이 함수의 반환값이 있는 것 조차 모순일때 never 타입 사용
