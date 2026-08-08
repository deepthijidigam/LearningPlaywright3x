let n = 5;

for(let i=0; i<n; i++) {
    let s = '';
    for(j=n; j>i; j--) {
        s += ' ';
    } 
    for(let k=0; k<=i; k++) {
        s += '*';
    }   
    console.log(s);
}