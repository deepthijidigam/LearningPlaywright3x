let a = [-10, -14, -5, -1, 4];
let max = -Infinity;

for(let i=0; i< a.length; i++) {
    if(a[i] > max) {
        max = a[i];
    }
}
console.log(max);