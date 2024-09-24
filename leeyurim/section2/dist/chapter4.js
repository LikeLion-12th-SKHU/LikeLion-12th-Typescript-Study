//타입 별칭
let User = {
    id: 1,
    name: "이유림",
    nickname: "mosiragora",
    birth: "2005.07.25",
    bio: "안녕하세요",
    location: "부천시",
};
let user2 = {
    id: 2,
    name: "이유림",
    nickname: "mosiragora",
    birth: "2005.07.25",
    bio: "안녕하세요",
    location: "부천시",
};
//3개의 프로퍼티 밖에 없지만 만약 양이 방대해 진다면
//키와 밸류의 규칙을 기준으로 객체의 type을 정의할 수 있는 문법인 인덱스 시그니처 사용
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: "uk",
};
let countyNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    UnitedKingdom: 826,
};
export {};
