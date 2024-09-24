//enum타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "양라윤",
  role: Role.ADMIN,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST,
};

//숫자를 사용하면 까먹는 상황들을 enum타입으로 해결할 수 있다.
