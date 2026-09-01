let order = new Promise(function(resolve, reject){

        let foodready = true;
        if(foodready){
            resolve("Pizza is delivered!");
        }
        else{
            reject("Order cancelled");
        }


});

//console.log(order);

order.then(result => console.log(result))
    .catch(result => console.log(error));