let n = 10;

let a = 0;
let b = 1;
let c = 0;

//console.log(a);
//console.log(b);
process.stdout.write(a + ' ');
process.stdout.write(b + ' ');
for(let i=1; i<n-1; i++) {
    c = a + b;
    a = b;
    b = c;
    process.stdout.write(c + ' ');
}