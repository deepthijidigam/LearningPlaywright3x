let testRes = ["PASS", "FAIL", "PASS", "SKIP"];

testRes.forEach(function(res, index) {
    console.log('Test ' + index + ' -> ' + res);
});