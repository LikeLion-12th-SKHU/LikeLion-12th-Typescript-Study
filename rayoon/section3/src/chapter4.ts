/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어 낸 타입
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = " hello";

a = true; //boolean 타입도 포함하기 위해서는 | 를 이용하여 타입 추가
//타입 추가 개수는 무한개

let arr: (number | string | boolean)[] = [1, "hello", true];

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
