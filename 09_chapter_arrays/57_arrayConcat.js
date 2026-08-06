let a = [1,2,3];
let b = ['a', 'b','c'];

let c = a.concat(b);  //concat
console.log(c);

let d = [...a, ...b]; //This is calles spread. Both concat and spread works as same
console.log(d);

//array into bug string
let s = [1,4,3,12].join('-');
console.log(s);


