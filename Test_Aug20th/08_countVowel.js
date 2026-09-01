let str = 'Hyderabad';
str = str.toLowerCase();
let ove = 'aeiou';
let con = 'bcdfghjklmnpqrstvwxyz';
let ovCount = 0;
let conCount = 0;

for(let i=0; i<str.length; i++) {
    if(ove.includes(str[i])) {
        ovCount++;
    }
    else if(con.includes(str[i])) {
        conCount++;
    }
    
}
console.log('Number of ovels: ' + ovCount);
console.log('Number of consonents : ' + conCount);