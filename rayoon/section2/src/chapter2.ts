//배열
let numArr: number[] = [1, 2, 3];
//배열의 타입을 지정하기 위해서는 배열 요소의 타입을 적어줘야함 (여기는 1,2,3이라 number)

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];
// <타입>을 넣어 지정하는 것을 제네릭 문법이라고 함
// 이 문법을 이용해서 배열타입을 지정하는 것도 가능함
// 배열타입을 정의하는 두가지 방법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];
// string | number = string이거나 number일 수 있다.

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];
//요소들의 타입을 적어주고 대괄호를 열고 대괄호를 한번 더 연다 (차원 수 만큼의 대괄호를 열어줘야함)

//튜플 (자바스크립트에는 없는 타입)
//길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
//tup1 = [1,2,3] 길이가 벗어나는 배열 저장 X
//tup1 = ["1","2"] 타입을 벗어나는 배열도 저장 X

let tup2: [number, string, boolean] = [1, "2", true];
// 타입 순서를 바꾸거나 길이를 변경하면 안됨
// tup1.push(1);나 pop(1); 등 배열 메소드 가능함
// 배열 메소드를 사용할때는 길이 제한이 없음
// 튜플 타입을 사용할때 push나 pop등 길이 변환이 있는 메소드를 사용할 때 주의해야함
