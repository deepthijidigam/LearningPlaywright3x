let srt = 'Hello World';
let revSrt = '';

for(let i=srt.length-1; i>=0; i--) {
    revSrt += srt[i];
}

console.log(revSrt);