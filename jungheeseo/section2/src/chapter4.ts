type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterload",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterload",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

type CountryCodes = {
  [key: string]: string; //인덱스 시그니처
};

let countryCodes: CountryCodes = {
  korea: "ko",
  UnitedStates: "US",
  UnitedKingdom: "uk",
};
