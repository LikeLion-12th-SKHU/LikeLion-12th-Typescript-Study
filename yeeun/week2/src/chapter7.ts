// void->공허->아무것도 없다=아무것도 없음을 의미하는 타입

function func2(): void {
  console.log("hello");
}
// let a: void;
// a = undefined;

// "strictNullChecks: false" 일 경우
// let a: void;
// a = undefined;
// a = null;

// never 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

let a: never;
// a = 1;
// a = null;
// a = undefined;
// a = anyVar;
