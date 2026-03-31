// Invoking JavaScript Functions

// A JavaScript function runs when it is called.

// Function Invocation

// The code inside a function is NOT executed when the function is defined.
// The code inside a function will execute when "something" invokes the function:

// The function below returns the text "Hello World".
// But it will not run before i call it.
// example
function sayHello() {
    return "Hello World";
}




// The code below calls the function.
// But it does not use the result.
function sayHello() {
    return "Hello World";
}
sayHello();
// To use the returned value, i can store it in a variable or display it.

// Using the Returned Value
// When a function returns a value, i can store the value in a variable.
function sayHello() {
    return "Hello World";
}
let greeting = sayHello();

// i can display the returned value in many ways, for example using console.log() or HTML.
function sayHello() {
    return "Hello World";
}
console.log(sayHello());
document.getElementById("demo").innerHTML = sayHello();



// Calling a Function Many Times
// i can call the same function whenever you need it.
function sayHello() {
    return "Hello World";
}
let a = sayHello();
let b = sayHello();
let c = sayHello();


// Calling vs Referencing a Function
// This is an important difference:

// sayHello refers to the function itself. It returns the function.
// sayHello() refers to the function result. It returns the result