// 타입 별칭 - 타입을 변수처럼 정의하여 사용
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// 함수 내에서는 사용할 수도 있음.
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterload",
  birth: "1998.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterload",
  birth: "1998.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
