function letsShop(item, callMe) {
    console.log('Store is busy');
    console.log('Now store is free!');
    callMe();
    callMe();
}

letsShop('Hello', () => {
    console.log('Lets go back for shopping ');
})