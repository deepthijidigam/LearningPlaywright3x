//null vs undefined

console.log(null == undefined);  //t
console.log(null === undefined);  //f

console.log(null == 0);  //f
console.log(null > 0);  //f while comparing null will become 0, so 0>0 is false
console.log(null >= 0); //t again as above 0>=0 is true 
console.log(null == 0 || null > 0) // f