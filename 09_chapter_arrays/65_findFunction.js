let a = [10, 24, 45, 36];

let res = a.find(num => num>10); // 24
console.log(res);

let res1 = a.findIndex(n => n > 10); //1
console.log(res1);

let res2 = a.findLast(num => num > 10); //36
console.log(res2);

let res4 = a.findLastIndex(n => n>10); // 3
console.log(res4);
