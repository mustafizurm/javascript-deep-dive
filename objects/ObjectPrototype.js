// JavaScript Object Prototypes:

// prototype is a property of a function object, and this property is an object.
// Every function in JavaScript has a "prototype" object.

// when we use the "new" keyword, a new object is created automatically.
// That new object gets an internal hidden link called [[Prototype]] (it is also known as __proto__),
// which points to the constructor function's prototype property which is  object.

// Because of this link, the created object can access methods and properties
// defined inside the prototype object. This is called prototype chaining.


function BANK() {
    this.name = '';
    this.nid = '';
    this.name = '';
    this.balance = 0;
}
BANK.prototype = {
    createAccount: function (nid, dob, name) {
        this.nid = nid;
        this.dob = dob;
        this.name = name;
    },
    deposit: function (balance) {
        const depositBalance = balance;
        if (Number(depositBalance) && Number(depositBalance) > 0) {
            this.balance = this.balance + depositBalance;
            return `successfully deposit ${depositBalance} TK`
        } else {
            return `Not a valid number`
        }
    },
    withdrew: function (balance) {
        const amount = Number(balance);

        if (!amount || amount <= 0) {
            return "Not a valid number";
        }

        if (amount > this.balance) {
            return "Insufficient Balance";
        }

        this.balance = this.balance - amount;
        return `Successfully Withdrawn ${amount} TK`;
    },
    checkBalance: function (nid) {
        if (Number(nid) === Number(this.nid)) {
            return `Your Balance is ${this.balance} TK`
        } else {
            return `Nid Incorrect`
        }
    }
}

const user1 = new BANK()
user1.createAccount('7308475704', '20-01-1996', 'user1');
user1.deposit(500);
user1.deposit(1500);
user1.withdrew(300);
const user1_Check_Balance = user1.checkBalance('7308475704');
console.log(user1_Check_Balance)




// Here, Player.prototype is a property of the Player function,
// and it is an object that holds shared methods for all instances.

// When we create an object using the "new" keyword,
// that object gets linked to Player.prototype automatically.

// So both mushfiquer and taskin can access getRole() method through prototype chaining.