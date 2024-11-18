/**
 * 1. 합집합 - Union 타입
 */

let a: string | number; // 무한대로 타입을 묶을 수 있음
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true]; // 배열의 타입을 정의

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
//     name: "",
// }

/**
 * 2. 교집합 타입 - intersection 타입
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
