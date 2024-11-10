/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * 두가지의 조건을 모두 만족해야 호환된다고 할 수 있다.
 */

//기준1. 반환값이 호환되는가
// 반환값이 호환되는가의 기준은 반환값끼리의 다운캐스팅되면 안되도록 평가한다.

type A = () => number;

type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //업캐스팅
// b = a; //다운캐스팅

/**
 * 기준2. 매개변수가 호환되는가
 * 반환값이 기준일때와 반대로 업캐스팅일 때 불가함
 */

//2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; //업캐스팅
d = c; //다운캐스팅

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // animalFunc가 슈퍼타입이라서 불가능함

//2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;

// 할당하려고 하는 함수 타입의 매개변수의 개수가 더 적을 떄에만 호환가능
