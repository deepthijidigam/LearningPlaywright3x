const isPass = (score) => {
     if (score > 60) 
         return 'PASS';
     else
         return 'FAIL';
    //return (score>60) ? 'Pass': 'Fail';
}

console.log(isPass(55));