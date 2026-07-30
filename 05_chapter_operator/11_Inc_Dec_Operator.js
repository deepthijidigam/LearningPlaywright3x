let a =10;
console.log(a);

console.log(++a + a);
console.log(a);

console.log(++a + ++a); // 12 + 13
console.log(a); // 13

let b = 10;
console.log( ++b + b + b++); // 11 + 11 + 11 = 33
console.log(b); //12

let i = 1;
let result = i++ + ++i; // 1 + 3 = 4
console.log(result, i); // 4,3

let c = 10;
console.log(++c + ++c); // 11 + 12 = 23
console.log(c); // 12

let d = 34;
let res = d++; // res = 34 d = 35
console.log(res);
console.log(d); 