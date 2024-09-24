let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김시은",
};

let dog: {
  name?: string;
  color: string;
} = {
  color: "brown",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
