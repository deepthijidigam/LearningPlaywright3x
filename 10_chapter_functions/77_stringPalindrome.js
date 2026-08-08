let str = 'racecar';
let strLength = str.length;
let revStr = '';
//console.log(str.at);

for(let i=strLength-1; i>=0; i--) {
   // console.log(str.at(i));
    revStr += str[i];
}
if(str === revStr) {
    console.log('Palindrome');
}
else {
    console.log('Not');
}
