class TestRunner {
    #apikey; //its a private var
    static totalTests = 0;  //static var
    static passCount = 0;

    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests ++;

        if(passed) {
            TestRunner.passCount++;
        }
    }
}

let tr1 = new TestRunner('login' , true);
let tr2 = new TestRunner('login' , false);
let tr3 = new TestRunner('login' , true);
let tr4 = new TestRunner('login' , false);

console.log(TestRunner.totalTests);
console.log(TestRunner.passCount);
