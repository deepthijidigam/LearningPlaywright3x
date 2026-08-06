let a = [1, 2,3,4,5,7];
let b = [2,4,6,8,10];
let c = [12,34,6,8,100];
for(let i=0; i<a.length; i++) {
    console.log(a[i]);
}
console.log('---------------for of');
for(let num of b) {
    console.log(num);
}
console.log('---------------');
c.forEach((n,index) => console.log(`Index: ${index} and Number: ${n}`));

console.log('---------------');
for(let num in b) {
    console.log(b[num]);
}