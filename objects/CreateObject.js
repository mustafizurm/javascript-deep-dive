// Object Constructor (built-in) দিয়ে object তৈরি করা,
// way - 1

var tamim = new Object();

tamim.name = "tamim";
tamim.age = 25;

// method add
tamim.greet = function () {
    return "Hello, my name is " + this.name;
};

tamim.getAge = function () {
    return this.age;
};

// use
console.log(tamim.greet());
console.log(tamim.getAge());



//  Object Literal দিয়ে object তৈরি করা (common-way)| when we need single object then we can use it
// way - 2

var taskin = {
    name: "taskin", // property
    age: 25,       // property

    // method
    greet: function () {
        return "Hello, my name is " + this.name;
    }
};

//  Factory Function দিয়ে object তৈরি করা| when we need a lot of objects then we can use this way
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            return "Hello " + this.name;
        }
    };
}

var rakib = createUser("rakib", 25);


// Constructor Function, it controll prototype. but its a old version
// way- 4

function User(name, age) {
    this.name = name;
    this.age = age;


}
User.prototype = {
    greet() {
        return "Hello " + this.name;
    },
}

var mustafizur = new User("mustafizur", 25);



// Class (ES6) it controll prototype. and its a new version
// way - 5

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello " + this.name;
    }
}

var nahid = new User("nahid", 25);


// Object.create. it works to controll prototype. it works for constructor,class
//  way - 6

var userMethods = {
    greet: function () {
        return "Hello " + this.name;
    }
};

var masrafi = Object.create(userMethods);
masrafi.name = "masrafi";
masrafi.age = 25;