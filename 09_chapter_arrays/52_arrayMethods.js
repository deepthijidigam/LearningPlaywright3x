let arr1 = [2,4,1,56,12];
let arr2 = [3,5,6];
let arr3 = ['t', 'f', 'a', 'o'];

console.log(arr1.at(1));           //4
console.log(arr1.concat(arr2));    //[2,4,1,56,12,3,5,6]

let mappedArray = arr1.map(num => num * 2);
console.log(mappedArray);          //[4,8,2,112,24]

let filteredArray = arr1.filter(num => num%2 === 0);
console.log(filteredArray);        //[2,4,56,12]

console.log(arr3.sort());  //[a, f, o, t]

arr2.forEach(num => console.log(num + 2));     // 5, 7, 8

let sum = arr1.reduce((sum, currentnum) => sum + currentnum );
console.log(sum);  // 75
