let a = [10, 2, 4, 17, 100];

let max = a[0];

for(let i=0; i<a.length; i++) {
    if(max < a[i]) {
        max = a[i];
    }
}

console.log(max);