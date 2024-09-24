// 원시타입 number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
// :number 콜론사용 -> 타입주석 (annotation)
//문자열 전용 메소드 사용 X

// 문자열타입 string
let str1: string = "hello";
let str2: string = "hello"; //작은 따옴표
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean 참과 거짓만 저장하는 타입
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

//"strictNullChecks" : false 로 설정하면 허용됨

// 리터럴 타입
let numA: 10 = 10;
//타입으로 지정된 값외에는 변수에 넣을 수 없음
//문자열과 boolean 타입도 같음
