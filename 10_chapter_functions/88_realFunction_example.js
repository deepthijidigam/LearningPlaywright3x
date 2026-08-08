const validateStatuscode = (code) => {
    if(code>=200 && code<=300) {
        console.log('Request is fine!')
    }else {
        console.log('Invalid Req');
    }
}
validateStatuscode(201);
