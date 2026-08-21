function isPrime(num) {
    
    
    let count = 0;
    for(let i=1; i<=num; i++) {
        if(num%i == 0) {
            count++;
        }
    }
    if(count === 2) {
        return 'Prime';
    }
    else
        return 'Not a Prime';
}
console.log(isPrime(15));
console.log(isPrime(17));
console.log(isPrime(11));