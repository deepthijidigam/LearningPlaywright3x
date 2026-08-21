function add(a,b,c) {
    return a+b+c;
}
function hasError(...codes) {
    return codes.some(c => c>=400);
}
function addNums(...nums) {
    return nums.reduce((sum,n) => sum+n,0);
}

let sum = add(2,3,5);
console.log(sum);

let num = [1,2,3];
console.log(add(...num));

console.log('========');

let errCodes = [200, 201, 400];
console.log(hasError(...errCodes));

console.log('========');

let nums = [2, 3, 4, 5,1];
console.log(addNums(...nums));