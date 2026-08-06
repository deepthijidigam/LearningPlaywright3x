let arr = ["pass", "fail", "pass", "error", "fail"];


console.log(arr.indexOf("fail"));    //1
console.log(arr.indexOf("abcd"));     //-1
console.log(arr.lastIndexOf("pass")); //2
console.log(arr.includes("error"));  //true