let i = 1; 

let r = i++ > 1 ? i++ : ++i; // 1 > 1 F so r = 3
console.log(r, i); // 3,3