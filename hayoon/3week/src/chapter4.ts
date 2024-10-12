// 기본 타입간의 호환성

import { type } from "os";

let num1: number = 10;
let num2: 10 = 10;

// 업캐스팅 -> 가능
num1 = num2;

// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사
// 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하면 안되도록 막는 검사

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
};

let book3: Book = programmingBook;

// 함수의 인수로 객체를 전달할 때도 초과 프로퍼티 검사가 발동됨.
// 따라서 변수에 저장해두었다가 인수로 변수를 전달해야 함.
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
});
func(programmingBook);
