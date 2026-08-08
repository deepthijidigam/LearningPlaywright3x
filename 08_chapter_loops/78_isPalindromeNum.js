let num = 12321;
let original = num;
let rev = 0;
let rem = 0;
//console.log(Math.floor(num/10));
while(num > 0) {
    rem = num % 10;
    rev =  (rev * 10 )+ (rem);
    num = Math.floor(num / 10);
}
if(original === rev) {
    console.log("Palindome");
}
else
    console.log("Not");