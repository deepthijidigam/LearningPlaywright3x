let names = ['deepthi', 'hanuma', 'ram', 'sita', 'mahesh', 'sudha', 'amogha'];

console.log(names.sort());

let nums = [10, 1, 3, 20, 30, 2];

console.log(nums.sort());  // [ 1, 10, 2, 20, 3, 30 ] which is wrong 

nums.sort((a,b) => a-b);
console.log(nums);          // Asc [ 1, 2, 3, 10, 20, 30 ]

nums.sort((a,b) => b-a);    //Desc 
console.log(nums);           //[ 30, 20, 10, 3, 2, 1 ]