/* unknown 타입 */

function unknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/* never 타입 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = string;
  //   let never3: never = true;
}

/* void 타입 */
function voidExam(): void {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

/* any 타입 */
function anyExam(): void {
  let unknownVar: unknown;

  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = undefinedVar;

  undefinedVar = anyVar;

  //   neverVar = anyVar;
}
