// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// constructor function can help us for method share. constructor function works behind the seen using object.create|

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// prototype.
// we use another object for method share. in constructor function, we dont need it. because in constructor function has a property that is object. when we create a object using new keyword then object.create added with object that is prototype property and which is object.

Person.prototype = {
    getFullName: function(){
        return this.firstName + this.lastName
    }
}

var shakib = new Person('shakib ', 'all hasan', 42, 'black')
console.log(shakib.getFullName())