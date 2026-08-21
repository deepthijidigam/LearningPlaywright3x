function factorial(num) {
    let m = 1;

    if(num === 0) {
        return 1;
    }
    else {
        for(let i=1; i<=num; i++) {
        m = m * i;    }
        return m;
    }    
}

console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(6));