// number원시타입 (js에서 숫자를 의미하는 모든 값을 포함)
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
//num 타입으로 선언한 변수에는 num타입만 가능
//num1.toUpperCase{} 처럼 문자열 전용 매서드 사용 불가
//num1.toFixed{} 처럼 넘버타입 매서드는 사용 가능
//strig 원시타입 (문자열)
let str1 = "hello";
let str2 = `hello`;
let str3 = `hello`;
let str4 = `hello ${num1}`;
//str1 = 123; -> 오류
//str1.toFixed{} -> 넘버타입 매서드 오류
//str.toUpperCase{} -> 문자열 매서드 사용 가능
//boolean 원시타입 (참과 거짓만 저장 가능)
let bool1 = true;
let bool2 = false;
//null 원시타입
let null1 = null;
//undefined
let unde1 = undefined;
// 리터럴 타입(값 그 자체가 타입이 됨)
// 리터럴 -> 값
let numA = 10;
let strA = "hello";
export {};
