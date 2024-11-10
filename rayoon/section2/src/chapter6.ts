//Any
//특정 변수의 타입을 확실하게 알지 못할 때 사용
//any Type = 어떤 타입이던지 ~

//모든 타입이 될 수 있다.
let anyVar: any = 10;

// let num: number = 10;
// num = anyVar;

// let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};

// anyVar.toUpperCase();
// anyVar.toFixed();
// anyVar.a;

//unknown

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//단, 실행을 시키면 오류가 발생함
//함수에서 메소드를 호출하려고 해서 오류가 런타임에 발생하게 됨
//any타입은 사용하지 않는 것이 좋음
