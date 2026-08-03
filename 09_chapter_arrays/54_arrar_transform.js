let scores = [50, 20, 60, 75, 88, 100];

let arr = scores.map(s => s>=60 ? "Pass" : "Fail");
console.log(arr);

// find the scores whose are > 60

let passScore = scores.filter(s => s>60);

console.log(passScore);

let totalScore = scores.reduce((sum,n)=>sum+n,0);
console.log(totalScore);