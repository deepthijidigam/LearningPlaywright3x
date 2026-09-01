//CAB -> class is a collection of attributes and behaviour
class Person {
    //Attributes
    name;
    age;
    gender;

    //Behaviour
    eat(){
        console.log('EAT');
    }

    sleep(){
        console.log('SLEEP');
    }
}

let p1 = new Person();
p1.eat();
p1.sleep();
