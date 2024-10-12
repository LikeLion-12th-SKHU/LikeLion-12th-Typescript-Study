// unknown 타입
// 계층도 최상단 -> 모든 타입들의 슈퍼 타입 = 전체 집합

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅이라 안됨.
  // let num: number = unknownVar
  // let str: string = unknownVar
  // let bool: boolean = unknownVar
}

// Never 타입
// 최하위 계층 -> 모든 타입의 서브 타입, 모든 집합의 부분집합 = 공집합

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 모두 업캐스팅이라 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅이라 안됨. -> 아무런 값도 저장할 수 없음.
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

// Void 타입
// void 타입은 undefined 타입의 슈퍼타입이다

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

// any 타입
// 치트키 타입 -> 타입 계층도를 완벽히 무시 (모든 타입의 슈퍼타입, 서브타입(never 제외)이 될 수 있음)

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운캐스팅이지만 허용됨(any 타입 한정)
  anyVar = unknownVar;

  // 다운캐스팅(자기한테 오는 다운캐스팅도, 자신이 다운캐스팅을 하는 것도 가능)
  undefinedVar = anyVar;

  // 이 다운캐스팅은 안됨. never 타입은 공집합이기 떄문에 어떤 타입도 다운캐스팅 불가
  // neverVar = anyVar;
}
