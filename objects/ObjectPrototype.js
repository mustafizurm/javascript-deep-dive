// JavaScript Object Prototypes:

// prototype is a property of function object. and this property is a object.
// when we use new keyword then a object will create and these object proto will be linked into prototype object.
// created new object can chain from prototype object.  

function Player(name, role, country){
    this.name = name;
    this.role = role;
    this.country = country;
}

Player.prototype = {
    getRole: function(){
        return this.role + ' is ' + this.name + "'s role"
    }
}

var nasir = new Player('nasir', 'batting', 'bd')
var taskin = new Player('taskin', 'bolling', 'bd')


// here Player.prototype is a property of player function and also it is a object that name is prototype. 
// when we create object using new keyword then that object link prototype object for share.