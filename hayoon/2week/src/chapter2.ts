// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterload"];

// 이런 방식도 가능
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 - ts only
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 배열 메소드 사용시 튜플의 길이제한이 발동하지 않음. 주의 필요
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 인덱스 사용 시 배열의 순서를 헷갈릴 수 있는데 튜플은 이때 유용.
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  //   [5, "최아무개"],
];
