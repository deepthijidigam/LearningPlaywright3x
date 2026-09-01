class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(bal, isCashier) {
        if(isCashier) {
            this.#balance = bal;
        }
        else {
            console.log('Not Allowed');
        }
    }
}

let deepthi = new ICICI('Deepthi', 50000);

console.log(deepthi.getBalance());
deepthi.setBalance(100000, true);
console.log(deepthi.getBalance());