//Number
let integer = 10;
let float = 10.5;

// string
let text = "This is text";

// boolean
let bool = true;
let bool2 = false;

// object
let user = {
  firstName: "Muhamad Rizki",
  lastName: "Arif Fadillah",
  age: 25,
};

// Date object.

let date = new Date("2024-07-31");

console.log(integer, float, text, bool, bool2);
console.log(user, date);

// Array
let myArray = [1, 2, 3, 4, 5, 6, 7];
for (let x of myArray) {
  console.log(x);
}
