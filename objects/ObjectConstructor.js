// Sometimes we need to create many objects of the same type.
// To create many objects we use constructor function.

// Constructor Function means a special type of function object, where is used new keyword to create object.

// new keyword can do-
// 1- create a object.
// 2- doing bind with this keyword, now this keyword is object.
// 3- function.prototype will be prototype of this object.
// 4- and return new object.


function Person(firstName, lastName, age, eye) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eye;
  this.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
}


var shakib = new Person('shakib ', 'all hasan', 42, 'black')
console.log(shakib.getFullName())

// Built-in JavaScript Constructors
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

function Work(){

}

