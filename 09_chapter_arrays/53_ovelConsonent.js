let s = "HEllo World";
s = s.toLowerCase();

console.log(s);

let voles = 0;
let con = 0;
let other = 0;

console.log(s.at(0));

for(let i=0; i<s.length; i++) {
    if(s.at(i) == "a" || s.at(i) == "e" || s.at(i) == "i" || s.at(i) == "o" || s.at(i) == "u") {
        voles++
    }
    else if(s.at(i) == ' ') {
        other++;
    }
    else{
        con++;
    }
}
console.log('Voles: ', voles);
console.log("Consonents: ", con);