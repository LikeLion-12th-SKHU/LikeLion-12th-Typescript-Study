// any 타입
// 특정 변수의 타입을 확실히 모를 떄

let anyVar: any = 10; // 오류가 있는 코드도 검사를 다 통과하게 되어서 런타임의 에러가 발생함 ts가 가지는 이점을 다 버림...
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar :unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//num = unknownVar;
//unknownVar.toUpperCase()// 변수에 unknown 값을 넣을 수 없음

if(typeof unknownVar === "number") {
    num = unknownVar;
} //타입 정제 과정을 통해 넣을 수는 있다.

//변수의 값이 확실치 않다면 unknown타입을 쓰는 게 좀 더 좋다