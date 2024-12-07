// let anyVar = 10;
// anyVar = "hello"; // 오류 발생!

// let anyVar: any = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar.toUpperCase();
// anyVar.toFixed();
// anyVar.a;

// let anyVar: any = 10;
// anyVar = "hello";
// let num: number = 10;
// num = anyVar;

// let anyVar: any = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar.toUpperCase();
// anyVar.toFixed();
// anyVar.a;

// let unknownVar: unknown;
// unknownVar = "";
// unknownVar = 1;
// unknownVar = () => {};

// let num: number = 10;
// let unknownVar: unknown;
// unknownVar = "";
// unknownVar = 1;
// unknownVar = () => {};
// num = unknownVar; // 오류 !

let unknownVar: unknown;
// unknownVar * 2 // 오류!

if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
