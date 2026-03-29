
// Properties are key:value Pairs
var laptop = {
    name: "DELL",
    category: '',
    price: 76000,
    processior: '',
    ram: '',
    rom: '',
    discount: false,
    brand: '',
    subCategory: ''
}

// Accessing JavaScript Properties - 2 way

// Dot notation
console.log(laptop.price)

// Bracket notation -> 
// bracket এর ভিতরে string, variable, বা expression থাকতে পারে
console.log(laptop['price'])
for (const property in laptop) {
    console.log(property)
}



// added JavaScript Properties - 2 way
// Dot notation
laptop.display
laptop.display = '14'

// Bracket notatiion ->
// bracket এর ভিতরে string, variable, বা expression থাকতে পারে
laptop['batery'] = '600vh'


// updated JavaScript Properties - 2 way
// Dot notation
laptop.display = '16'

// Bracket notatiion ->
// bracket এর ভিতরে string, variable, বা expression থাকতে পারে
laptop['batery'] = '800vh'

console.log(laptop)