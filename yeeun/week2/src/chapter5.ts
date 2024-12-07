// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum Role {
//     ADMIN = 0,
//     USER = 1,
//     GUEST = 2,
//   }

// enum Role {
//   ADMIN, // 0 할당(자동)
//   USER, // 1 할당(자동)
//   GUEST, // 2 할당(자동)
// }

enum Role {
  ADMIN = 10, // 10 할당
  USER, // 11 할당(자동)
  GUEST, // 12 할당(자동)
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, //관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 회원
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트
};

// 문자열 열거형

enum Language {
  korean = "ko",
  english = "en",
}

// enum Role {
//   ADMIN,
//   USER,
//   GUEST,
// }

// enum Language {
//   korean = "ko",
//   english = "en",
// }

// const user1 = {
//   name: "이정환",
//   role: Role.ADMIN, // 0
//   language: Language.korean, // "ko"
// };

// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["USER"] = 1] = "USER";
//     Role[Role["GUEST"] = 2] = "GUEST";
// })(Role || (Role = {}));
// var Language;
// (function (Language) {
//     Language["korean"] = "ko";
//     Language["english"] = "en";
//     Language["japanese"] = "jp";
// })(Language || (Language = {}));
// const user1 = {
