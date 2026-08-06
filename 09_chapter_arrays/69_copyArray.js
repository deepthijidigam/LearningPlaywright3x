let original = [2,4,5,6,7];
console.log('=======shalow copy origina array will not change');
let copy1 = [...original];
console.log(copy1);
console.log(original);

console.log('=======by slice');

let copy2 = original.slice(0);
console.log(copy1);
console.log(original);

console.log('=======by concat');

let copy3 = original.concat();
console.log(copy3);
console.log(original);

console.log('=======Deep copy');

let dcopy = original;
dcopy.push(30);
console.log('dcopy:' + dcopy);
console.log('original:' + original);

let ab = 5;
let aB = 10;
console.log(ab);
console.log(aB);

