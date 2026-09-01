class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + '-' + this.status + '-' + this.priority);
    }
}

let loginTestCase = new TestCase('LoginTest', 'Pass', 'P0');
let signupTestCase = new TestCase('SignUpTest', 'Fail', 'P1');

loginTestCase.display();
signupTestCase.display();