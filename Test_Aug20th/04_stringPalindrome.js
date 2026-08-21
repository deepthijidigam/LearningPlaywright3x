let str = 'Madams';
str = str.toLowerCase();
let revStr = '';

for(let i=str.length-1; i>=0; i--) {
    revStr += str[i];
}

//console.log(revStr);

if(str === revStr) {
    console.log(str + ' is Palindrome');
}
else {
    console.log(str + ' is not a Palindrome');
}