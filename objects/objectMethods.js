// create methods into object

var student1 = {
    name: 'shakib',
    age: 16,
    roll: '001',
    present_address: 'dhaka',
    permanent_address: 'satkhira',
    grade: 'A',
    section: 'commarce',
    getFullAddress: function () {
        return 'my present address is ' + this.present_address + ' and permanent is ' + this.permanent_address;
    },
    greet : function () {
        return `Hello, my name is ${this.name}`;
    }
}

// Accessing Object Methods

// To call an object method, i have to add parentheses ():
// Without parentheses we will get the function itself.

// method access
var fullAddress = student1.getFullAddress()
console.log(fullAddress)