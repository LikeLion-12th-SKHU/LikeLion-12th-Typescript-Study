// void 타입
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

let a: void;
//a = 1; //오류
//a = "hello"; //오류
//a = {} ; //오류
a= undefined; //return 문을 사용하고 싶지 않을때...!
//a = null; //strictNullChecks를 false로 하면 오류 안 남!

//never 타입
//never -> 존재하지 않는
//불가능한 타입

function func3(): never {
    while (true) {}
}

function func4() : never {
    throw new Error();
}

let anyVar: any;

let a: void;
//a = 1; //오류
//a = "hello"; //오류
//a = {} ; //오류
a= undefined; //오류
//a = null; //strictNullChecks를 false로 해도 오류남!
