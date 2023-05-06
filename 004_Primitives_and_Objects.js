//Premetive datatypes are set of basic data types in javascript. There are 7 premetive datatypes in JS.
//Null, Number, Symbol, String, Boolean, Bigint, Undefined
//Objects are basically key-value pair. Key can be any string, number and value will be any type of datatype

// nn bb ss u (remember the data types)

let a = null;
let b = 456;
let c = true;
let d = BigInt("987");
let e = "Sudip";
let f = Symbol("This is a symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g)

//to find the type of a variable;
console.log(typeof f)

//we dont need to mention that a variable is undefined. we can just declare it and it will automatically set it as undefined.

let h; //this will be indefined
console.log(h)

//Objects
//Objects in JS is a key value pair. Also called as non primitive datatypes
//Objects are created as

const item = {
  "Sudip": true,
  "Ankita": 23,
  "Akash": false,
  "Rahul": undefined
}
console.log(item["Sudip"])