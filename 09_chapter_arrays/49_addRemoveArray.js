let arr = [1,4,6,9];

arr.push(10);
console.log(arr);

arr.pop();

console.log(arr);

arr.unshift(0);

console.log(arr);

arr.shift();

console.log(arr);

let n = [2, 4, 5, 10, 12];
//let d = n.slice(1,2)
console.log(n.slice(1,3)); //[4,5] slice(startindex, endindex(exclude))

console.log(n);

n.splice(1,3);
console.log(n); // [2,10,12] it will remove elements from the original array splice(startindex, number of ele to remove)

let arr1 = [3, 40, 6, 12, 15, 11, 10];
console.log(arr1.slice(2, 3)); //[6] slice(startindex, endindex(exclude))

arr1.splice(2, 2);
console.log(arr1); // [3,40,15,11,10]

arr1.splice(1,2,1);
console.log(arr1); // [3,1,11,10]

arr1.splice(1,0,9); 
console.log(arr1);   // [3,9,1,11,10]  here we are not deleting any number but adding 9 instead

console.log("----------");

let spliceExa = [20, 10, 0, 6, 7];
spliceExa.splice(2, 2, 11, 12); // [20, 10, 11, 12,7]
console.log(spliceExa);

spliceExa.splice(-2, 2, 17);
console.log(spliceExa); //[20, 10, 11, 17]