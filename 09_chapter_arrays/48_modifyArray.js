let a = ["pass", "fail", "skip"];

console.log(a[0]); //pass

console.log(a[-1]); //undefined

console.log(a.at(-1)); //skip

a[0] = "sam";
console.log(a);

// a.at(1) = "guru";  This throws an error
console.log(a);