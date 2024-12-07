// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function test() {
  type User = string;
}

let user: User = {
  id: 1,
  name: "김시은",
  nickname: "tory",
  birth: "2004.09.19",
  bio: "방가방가 우릴친구햄도리",
  location: "기숙사",
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
  Korea: number;
};

// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko",
// };
