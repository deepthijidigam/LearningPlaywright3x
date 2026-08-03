let res = Array.isArray([1, 4,"a"]); 
console.log(res);                    // True

let res1 = Array.isArray("Deepthi");
console.log(res1);                   //False

let a = [23, 34, 10];

console.log(a.every(n => n>5));  //T
console.log(a.every(n => n>10)); //F


console.log(a.some(n => n>15)); //T
console.log(a.some(n => n>100)); //F