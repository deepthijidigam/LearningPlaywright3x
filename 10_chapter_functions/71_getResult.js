function getResult(score) {    //defining a function and here score is a parameter
    return score > 70 ? "Pass" : "Fail";
}

console.log(getResult(85));  //calling the function and we are passing the value which is calles as argument
console.log(getResult(50));