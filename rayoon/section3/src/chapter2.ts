function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 1;
  //   let never2: never = "string";
  //   let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  //   neverVar = anyVar; // never타입에는 어떤타입도 다운캐스팅 불가
}
