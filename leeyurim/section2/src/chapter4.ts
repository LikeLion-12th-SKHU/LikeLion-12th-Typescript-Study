//타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}; //중복발생 방지하기 위해 "타입을 변수처럼" 사용할 수 있는 타입별칭사용

let User: {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
} = {
    id: 1,
    name: "이유림",
    nickname: "mosiragora",
    birth: "2005.07.25",
    bio: "안녕하세요",
    location: "부천시",
};

let user2: User = {
    id: 2,
    name: "이유림",
    nickname: "mosiragora",
    birth: "2005.07.25",
    bio: "안녕하세요",
    location: "부천시",
};

//인덱스 시그니처
type CountryCodes = {
    [key : string] : string;
};
//3개의 프로퍼티 밖에 없지만 만약 양이 방대해 진다면
//키와 밸류의 규칙을 기준으로 객체의 type을 정의할 수 있는 문법인 인덱스 시그니처 사용

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [ket: string]: number;
}; //규칙을 위반하지만 않으면 오류 안 남!

let countyNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    UnitedKingdom: 826,
};

