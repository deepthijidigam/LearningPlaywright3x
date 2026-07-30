let env = "staging";

let URL = env === "prod" ? 'https://api.example.com' : 'https://staging.com';

console.log(URL);