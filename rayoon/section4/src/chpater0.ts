/**\
 * 함수타입 정의
 */
//함수를 설명하는 가장 좋은 방법
//어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
//어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}
//number + number는 넘버타입일거라고 자동으로 추론한다.

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "양라윤", tall: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}
//기본값과 다르게 정의해주면 오류가 발생 name : number = "양라윤"
//함수 호출시 매개변수 타입과 다른 타입을 작성하면 오류 발생

//두개의 매개변수 중 호출 시 하나를 생략하고 싶을때는 변수 뒤 '?'
//붙여서 선택적 매개변수를 만들어 주면 된다.
//단 , 필수매개변수는 선택적 매개변수 앞에 있어야 한다.

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}
getSum(1, 2, 3);
