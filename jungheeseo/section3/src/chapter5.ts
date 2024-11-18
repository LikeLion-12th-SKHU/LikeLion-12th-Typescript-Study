/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

// 객체를 구조분해 할당할 때에도 변수 타입 추론

let { id, name, profile } = c;

// 배열을 구조분해 할당할 때에도 각각의 원소 타입 추론
let [one, two, three] = [1, "hello", true];

// 반환값을 지정하면 함수의 반환값 타입을 추론
// 매개변수에 기본값을 설정하면 함수의 반환값 타입을 추론
function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

// const 사용 시 리터럴 값으로 추론
const num = 10;
const str = "hello";

// (number | string) 타입
let arr = [1, "string"];
