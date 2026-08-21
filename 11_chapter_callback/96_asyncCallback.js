console.log('TEST 1: API req sent');

setTimeout(function() {
    console.log("Test 2: API response received");
}, 5000);

console.log('Test 3: I will execute this meanwhile');

console.log(" ================= ");

function printInfo(name, callback) {
    console.log('Hello '+ name);
    setTimeout(function(){
        callback()
    }, 4000);
}

printInfo('Deepthi', function() {
    console.log('How are you?');
});



