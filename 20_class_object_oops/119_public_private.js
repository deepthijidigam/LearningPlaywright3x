class Credentials{
    #apikay;
    user;
    #apiKey;

    constructor(user, key) {
        this.user = user;
        this.#apikay = key;
    }

    getAuthHead() {
        return 'Bearer ' + this.#apikay;
    }
}

let cred = new Credentials('admin', 'secret_kay_123');

//console.log(cred.apiKey);
console.log(cred.user);
console.log(cred.getAuthHead());