let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};
let config: {
  readonly apiKey: string;
} = {
  apikey: "My API KEY",
};

//config.apiKey = "hacked";
user.id;
