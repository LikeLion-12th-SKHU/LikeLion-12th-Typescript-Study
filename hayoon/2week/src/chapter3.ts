// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "돌돌이",
//   color: "brown",
// };

// // object 타입 사용 시 점표기법으로 객체의 프로퍼티 접근이 불가.
// user.id;

// user = {
//   name: "홍길동",
// };

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
