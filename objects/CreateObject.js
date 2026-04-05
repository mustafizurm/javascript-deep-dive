// Object 
// Object Evolution

// Step 1: Object Literal {} (1997) And New Object
const rahim = { name: "Rahim" };
const Momin = new Object()
Momin.name = "Momin";
Momin.age = "23"

// Problem:
// 1- not reusable
// 2- not possible to create a lot of objects
// 3- if i want to create like 100 objects i have to do copy past, otherwish it will not be possible.
// 

// Need: 
// 1- reusable system

// solutions:
// 1- constructor function

// -----------------------------------------------------------------------------------------------
// Step 2: Constructor Function (1997)
function User(name) {
    this.name = name;
}

const u1 = new User("Rahim");

// solve:
// 1- reusable object creation

// New Problems:
// 1- if i forget to use new keyword i have to face a big problem. that is dengerous.
// 2- method duplication
// 3- confusing syntax

// Need: memory efficient + clean system

// solutions:
// 1- use prototype

// --------------------------------------------------------------------------------------------------
// tep 3: Prototype System
User.prototype = {
    eat: function () {
        return this.name + " " + "is eating"
    }
}

// solved:
// 1- method shared → memory save
// 2- inheritance possible

// New Problems:
// 1- not easy to understand
// 2- constructor + prototype split (messy)
// 3- as use use another object for method share that is prototype, here is not possible doing encaptulation 

// need: 
// 1- simple abstraction
// 2- doing encaptulation

// solutions:
// 1- factory function

// -------------------------------------------------------------------------------------------
// Step 4: Factory Function
function createUser(name) {
    return {
        name,
        sayHi() { }
    };
}
// Solved:
// 1- new problem gone
// 2- simple + readable
// 3- easy for encaptulation
// 4- easy for abstraction

// New Problems:
// 1- method duplication again 
// 2- inheritance weak
// 3- not working instanceof 

// Need: 
// 1- flexible inheritance + structure


// solutions:
// 1- Object.create

// ----------------------------------------------------------------------------------------------
// Step 5: Object.create() (ES5 - 2009)
var personProto = {
    sleep: function () {

    }
}

const person = Object.create(personProto);
person.name = "Tamim";
person.age = 25;



// Solved:
// 1- direct prototype linking
// 2- no need constructor function to inharitance
// 3- doing nature expose of javascript 
// 4- chain easily

// New Problems:
// 1- no have Reusable pattern
// 2- creating Multiple object is inconvenient
// 3- readability problem
// 4- for creating Multiple object, we need extra wrapper function.
// 5- Encapsulation (private data) problem

// Need: 
// 1- creating multiple object
// 2- need readability
// 3- easy inharitance
// 4- doing encaptulation
// 5- doing abstraction

// solutions:
// 1- using factory function + Object.create
// ------------------------------------------------------------------------------------
// Step 6: Object.create() and Factory function
var playerMethods = {

}

function player(name, age) {
    let obj = Object.create(playerMethods)
    obj.name = name;
    obj.age = age;
    return obj;
}

// solved:
// 1- creating multiple object
// 2- readability
// 3- inharitance

// didnt solve:
// 1- encaptulation
// 2- abstraction

// // solutions:
// using class for all problms to solve.

// ---------------------------------------------------------------------------------------------
// Step 7: class
class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello " + this.name;
    }
}

var nahid = new Parent("nahid", 45);

// solved:
// 1- encaptulation
// 2- abstraction
// 3- inharitance
// 4- polymorphism