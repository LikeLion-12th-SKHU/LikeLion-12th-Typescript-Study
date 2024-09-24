// void
// void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;
// nullchecks 옵션 끄면 null값도 넣을 수 있음.

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// never 타입은 아무값도 담을 수 없음.
// let a = never;
// a = undefined;
// a = null;
