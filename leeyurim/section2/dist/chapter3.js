//object (구조적 타입 시스템)
let user = {
    id: 1,
    name: "이유림",
};
//변수의 타입을 oject로 지정한다는 것은 변수가 객체인 것만을 알려주기 때문에 오류가 남
let config = {
    apiKey: "MY API KEY",
}; //절대 수정되어선 안되는 키가 있다면 "readonly"를 붙여서 읽기 전용 프로퍼티로 만들어줌
export {};
