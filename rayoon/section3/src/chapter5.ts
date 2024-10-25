/**
 * 타입 추론
 */
let a = 10; // 자동으로 넘버타입으로 추론
let b = "hello"; // string 타입으로 추론
let c = {
  id: 1,
  name: "양라윤",
  profile: {
    nickname: "winterlood",
  },
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
