// void
function func1(): string {
  return "hello;";
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;

// never
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

a = anyVar;
