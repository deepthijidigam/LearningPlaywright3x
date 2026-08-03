let arr = [1, 2, 3, 2, 4, 1];

let dup = '';

for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {

        if(arr[i] === arr[j]) {
            if(!dup.includes(arr[i])){
                dup = dup + arr[i] + ' ';
            }            
         }
    }    
}
if(dup.length === 0) {
    console.log("No duplicates found");
}
else{
    console.log(dup);
}
