let apiCall = new Promise(function(resolve, reject) {
    //we don't know whether the server resolve means five the data or reject means error
    reject("500: Server error");    
});

apiCall.then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
}).finally(function() {
    console.log('I will execute always');
});