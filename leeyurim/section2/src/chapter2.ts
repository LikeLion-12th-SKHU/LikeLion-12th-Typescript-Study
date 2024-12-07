// 배열
let numArr:number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterwood"];
//콜론을 찍고 배열의 요소 타입 정의 후 대괄호 작성 -> 변수의 타입 정의

let boolArr: Array<boolean> = [true, false, true]; //제네릭: 꺾쇠 안에 다른 문법을 넣음
//콜론 뒤에 배열의 이름 작성 후 꺾쇠 안에 배열의 요소 타입 작성


// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]; //대괄호를 연달아 달아줘서 다차원 배열의 타입 정의

// 튜플 (js에는 없고 ts에서만 제공됨!)
// "길이"와 "타입"이 고정되어 있음
let tup1:[number, number] = [1, 2];
//tup1 = [1, 2, 3] -> "길이를 넘어서는" 배열 저장 불가
//tup1 = ["1", "2"] -> 길이를 만족하더라도 "타입을 만족하지 않는" 배열 저장 불가

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["이유림", 1],
    ["응가응가", 2],
    ["우가우가", 3],
    ["이으이으", 4],
];
//요소의 타입 때문에 오류를 감지!
