// JavaScript Function apply()
// The apply() method is similar to call(), but it passes arguments in an array

// IMPORTENT
// if you have to understand apply property of function object, must be learned call property of function object. without understanding call property, will be not possible to understand. so you should learn call property. 
// you can see my note about call property in here--- https://github.com/mustafizurm/javascript-deep-dive/blob/main/funtions/Function_call_property.js


// Apply property
// in apply method, i have to pass arguments as array for data, which i would pass a lot of arguments using ',' that i have to use array for data. But not will be object a lot of. object will be single. its only for data.

// example using literal way.
var product = {
    name: "Laptop",
    price: 80000,

    // method
    getFinalPrice: function (discount, tax) {
        this.price = this.price - discount;
        this.price = this.price + tax;
        return this.price;
    }
};

var cartItem = {
    name: "Mobile",
    price: 20000
};

// i have to pass single object and a lots of data using array.
var result = product.getFinalPrice.apply(cartItem, [1500, 13]);

console.log(result);