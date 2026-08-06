let arr = [1, 2, 2, 1, 3, 4, 1];

let n = [];

for(let i=0; i<arr.length; i++) {
    let count = 0;
    if(!n.includes(arr[i])) {
        
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                count ++;
            }
        }        
    console.log(arr[i] + ' repeated' , count, 'times');
    n.push(arr[i]);
    }
    
}