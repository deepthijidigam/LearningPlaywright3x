class Person {
    #child1;
    child2;

    constructor(ch1, ch2) {
        this.#child1 = ch1;
        this.child2 = ch2;
    }

    getChild1() {
      return this.#child1;
    }

    setChild1(ch1) {
        this.#child1 = ch1;
    }
}

let p1 = new Person('sonu', 'monu');
console.log(p1.child2);
//console.log(p1.child1);   is not allowd as child1 is declared as Private
console.log(p1.getChild1());  