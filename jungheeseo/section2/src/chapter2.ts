// 배열
let numArr = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winter"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 터압이 다양한 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
//길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
