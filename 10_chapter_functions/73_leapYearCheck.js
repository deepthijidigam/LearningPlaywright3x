function isLeapYear(year) {

    if(year%100 == 0) {
        if(year%400 == 0) {
            return 'Leap Year';
        }
        else{
            return 'Not a Leap Year';
        }
    }else if(year%4== 0) {
        return 'Leap Year';
    }else {
        return 'Not a Leap Year';
    }
}

let result = isLeapYear(6000);
console.log(result);