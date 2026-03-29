// this in Objects
// The this keyword refers to an object.
// In JavaScript, this is used to access the object that is calling a method.


// When used inside an object method, this refers to the object.
const person = {
  firstName: "tamim",
  lastName: "iqbal",
  age: 42,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};



// Why Use this?
// The this keyword makes it possible to use the same method with different objects.
const person1 = {
  name: "John",
  hello: function() {
    return "Hello " + this.name;
  }
};

const person2 = {
  name: "Anna",
  hello: function() {
    return "Hello " + this.name;
  }
};

person1.hello();
person2.hello();