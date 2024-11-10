/**
 * 타입 단언
 */

//

type Person = {
  name: string;
  age: number;
};

// let person: Person = {};
// person.name = "이정환";
// person.age = 27;
//의도와 다르게 타입이 추론되어서 원하는 기능을 만들기 어려울때 사용

let person = {} as Person;
person.name = "이정환";
person.age = 27;
// 타입 단언은 as를 사용한다.

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

//cat.name = ""

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author: string;
};

let post: Post = {
  title: "게시글1",
  author: " 이정환",
};

const len: number = post.author!.length;
