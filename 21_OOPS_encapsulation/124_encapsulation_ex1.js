class Car {
    #engine;

    constructor(name, engine) {
        this.name = name;
        this.#engine = engine;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(eng) {
        this.#engine = eng;
    }
}

let c1 = new Car('creata', 'V8');
console.log('Name: ' + c1.name + ' , Engine: ' + c1.getEngine());

