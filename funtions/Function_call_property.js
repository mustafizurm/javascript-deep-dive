// About: The JavaScript call() Method

// when we need to indicate a different object from a objects method then we have to use a property of function object- that is "call".
// "objects method" means একটা object-এর ভিতরে method 

// example
class ParentEX{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

var oneParent = new ParentEX("Akbar", "Ali")
// oneParent.getFullName()

// "when we need to indicate a different object from a objects method" means একটা object-এর function (method) অন্য object দিয়ে চালাতে চাই|
// example

// এই object এর method ka-
class Parent{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
var oneParent = new Parent("Akbar", "Ali")


// এই object দিয়ে চালাতে চাই|
class Child{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var oneChild = new Child("Rakib", "Hasan")
// console.log(oneParent.getFullName.call(oneChild))





// real example
// ADVANCED
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDiscount(discount) {
        this.price = this.price - discount;
        return this.price
    }
}

var product1 = new Product('laptop', 75000)
// oneParent.getFullName.call(oneChild)

class CartItem {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

var user1_cart = new CartItem('mobile', '20000', '2')

console.log(product1.getDiscount.call(user1_cart, 700))



// IMPORTENT NOTE

// i have to pass only one argument as object into call,apply,bind property of function object. but i can pass a lot of arguments as data using ',' for call property |