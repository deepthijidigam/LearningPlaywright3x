class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(path) {
        return this.baseURL + path;
    }
}

let staging = new APIClient('http://staging.api.com');
let prod = new APIClient('http://prod.api.com');

console.log(staging.get('/staging'));
console.log(prod.get('/produsers'));