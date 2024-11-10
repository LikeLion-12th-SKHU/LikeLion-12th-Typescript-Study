/**
 * 함수 타입 표현식
 * = 타입 별칭을 이용해 함수 타입을 지정하는 것
 */

// type Add = (a: number, b: number) => number;
// const add = (a: number, b: number): number => a + b;
type Operation = (a: number, b: number) => number;
// const add: Add = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

//비슷한 함수 여러개를 작성할 때 유용하게 사용할 수 있음.

/**
 * 호출 시그니쳐
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 프로퍼티 추가 정의 가능
};

const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
