// object
// let user: object = {
//   id: 1,
//   name: "양라윤",
// };

// user.id; //오류 발생
// object 타입은 객체라는 정보만 가지고 있음
// 객체 리터럴 타입을 사용해야함

let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "양라윤",
};

user.id;
// 중괄호를 이용해 객체의 타입을 정의하는 방식을 객체 리터럴 타입이라고 부름

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

dog.name;

//구조를 기준으로 타입을 정의함 -> 구조적 타입 시스템
//= property based Type System
// 이름만을 기준으로 타입을 정의하는 것 -> 명목적 타입 시스템
// 타입 시스템은 = 구조적 타입 시스템

// id? : number;
// 선택적 property = optional property
// 이러한 ? 형식은 있어도 되고 없어도 되지만 있다면 무조건 number 타입이어야 한다.

let config: {
  readonly apiKey: string;
} = {
  apiKey: " MY API KEY",
};

// 절대 값이 바뀌어서는 안되는 property 앞에는 readonly를 붙여줌
