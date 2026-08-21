let a = 'hello world';

let res = '';

for(let i=0; i<a.length; i++) {
    let count = 1;
    let ch = a.charAt(i);
    if((ch === ' ') || res.includes(a.charAt(i))) {
        continue;
    }
    for(let j=i+1; j<a.length; j++) {
        if(a.charAt(i) === a.charAt(j)) {
                count ++;
                res += a.charAt(i);
        }
        
    }
    console.log(a.charAt(i) + ':' + count);
}