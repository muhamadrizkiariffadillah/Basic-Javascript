// Basic function
function sayHelloWorld() {
  console.log("Hello World!");
}
sayHelloWorld();

// return function
function returnFunction() {
  return "Hello World!";
}
let saveReturn = returnFunction();
console.log(saveReturn);

// Parameter function
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
let fullName = getFullName("Muhamad Rizki", "Arif Fadillah");
console.log(fullName);
