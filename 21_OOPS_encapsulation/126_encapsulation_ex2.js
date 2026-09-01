class TestCase {
    #status = 'Not Run';
    static #count = 0;

    constructor(name) {
        this.name = name;
        TestCase.#count++;
    }

    getStatus() {
        return this.#status; 
    }

    static getTestCaseCount() {
        return TestCase.#count;
    }

    run(pass) {
        this.#status = pass ? 'PASS':'FAIL';
    }
}

let tc1 = new TestCase('Login');
console.log(tc1.getStatus());
tc1.run(true);
console.log(tc1.getStatus());
let tc2 = new TestCase('signup');
let tc3 = new TestCase('Home');
let tc4 = new TestCase('cart');
console.log('No of test cases: ' + TestCase.getTestCaseCount());