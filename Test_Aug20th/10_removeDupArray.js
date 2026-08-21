let a = [10, 1, 3, 4, 5, 6, 10];

let res = [];

for(let i=0; i<a.length; i++) {
    if(!res.includes(a[i])) {
        res.push(a[i]);
    }
}
console.log(res);