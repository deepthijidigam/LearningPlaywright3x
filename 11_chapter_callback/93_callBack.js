function placeOrder(item, callback) {
    console.log('Order Placed, please wait...');
    callback();
}
//Normal fun
function abcd() {
    console.log('Order ready, please pick it up!-Normal fun');
}
placeOrder('Burger', abcd);

//Anonymous fun'
placeOrder('Burger', function(){
    console.log('Order ready, please pick it up!-Anonymous fun');
})

//Arrow fun
placeOrder('Burger', () => {
    console.log('Order ready, please pick it up!-Arrow func');
})

