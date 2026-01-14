const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
};

const karanArjun2 = {
    salary : 50000,
};

const karanArjun3 = {
    salary : 50000,
};

const karanArjun4 = {
    salary : 50000,
};


//using the prototype we can easily 
//using the functions and properties of another object

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

//agr employee class ke andar ek function hai...
//karanArjun class ke andar same function hai...
//ab jab hum fn call krenge to us func ke andar jo hai wo print hoga employee ka nahi...

class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}


let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");

//Inheritance in javascript 
class Person {

    constructor(){
        this.species = "homo sapiens";
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

}

class Engineer extends Person{
    constructor(branch){
        super();//to invoke the parent class constructor
        this.branch = branch;
    }
    work(){
        super.eat();
        super.sleep();
        console.log("solve problems,build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}

let adilObj = new Engineer();