
let arr = [2, 4, 5,11,'Deeti', 10];
let revArray = arr.reverse();
//console.log(revArray);

let str = "";

for (let i = 0; i < revArray.length; i++) {
    str = str + revArray[i] + ' ';
}

console.log(str);