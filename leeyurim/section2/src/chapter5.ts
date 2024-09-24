// enum 타입
// 여러가지 값드이 각각 이름을 부여해 열겨해두고 사용하는 타입

enum Role {
    ADMIN,
    USER,
    GUEST,
} //숫자를 굳이 할당하지 않아도 0번부터 할당됨
//시작 숫자만 지정해 주면 +1 되면서 할당됨! (숫자형 enum)

enum Language {
    korean = "ko",
    english = "en",
}; //타입스크립트의 enum은 컴파일 시 사라지지 않고 js의 객체로 변환됨! -> 값을 사용하듯 사용 가능

const user1 = {
    name: "이유림",
    role: Role.ADMIN,//0 <- 관리자 / ROLE이라는 프로퍼티에 0이 저장됨
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role : Role.USER, //1 <- 일반유저
    language: Language.english,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST //2 <- 게스트
};

console.log(user1, user2, user3);
