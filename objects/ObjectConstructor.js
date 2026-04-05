// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.

// Constructor Function মানে হলো- একটা special function object যেটা ব্যবহার করা হয় new keyword দিয়ে নতুন object বানানোর জন্য|
// constructor function ৪টা গুরুত্বপূর্ণ কাজ করে-
// 1- craete a object. and object name is this.
// 2- calling function by call property and pass arguments. first argument is this object and other arguments are data that is property of object.
// 3- linking prototype object. so that this object can inharite from prototype object. 
// 4- return this object. 


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
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

