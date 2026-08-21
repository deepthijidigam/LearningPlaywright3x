function statusCodes(code) {
    if (code >= 200 && code < 300) return 'Success';
    if (code >=400 && code < 500) return 'Client error';
    if (code >= 500) return 'Server error';
}

// Returns Nothing

function logTest(name) {
    console.log(`Running: ${name}`);
}

logTest('Hi, This is a log');
console.log(statusCodes(201));  