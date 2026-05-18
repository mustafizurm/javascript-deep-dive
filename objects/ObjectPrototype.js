// JavaScript Object Prototypes:

// prototype is a property of a function object, and this property is an object.
// Every function in JavaScript has a "prototype" object.

// when we use the "new" keyword, a new object is created automatically.
// That new object gets an internal hidden link called [[Prototype]] (it is also known as __proto__),
// which points to the constructor function's prototype property which is  object.

// Because of this link, the created object can access methods and properties
// defined inside the prototype object. This is called prototype chaining.

function Player(name, role, country){
    this.name = name;
    this.role = role;
    this.country = country;
}

// adding method to prototype
Player.prototype = {
    getRole: function(){
        return this.role + ' is ' + this.name + "'s role";
    }
}

var mushfiquer = new Player('mushfiquer', 'batting', 'bd');
var taskin = new Player('taskin', 'bowling', 'bd');
console.log(taskin.getRole())
console.log(mushfiquer.getRole())


// Here, Player.prototype is a property of the Player function,
// and it is an object that holds shared methods for all instances.

// When we create an object using the "new" keyword,
// that object gets linked to Player.prototype automatically.

// So both mushfiquer and taskin can access getRole() method through prototype chaining.