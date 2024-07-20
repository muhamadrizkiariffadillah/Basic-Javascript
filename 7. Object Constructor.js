function User(id, fullName, age, school, isAdmin) {
  this.id = id;
  this.fullName = fullName;
  this.age = age;
  this.school = school;
  //   Default properties
  this.isAdmin = false;
}

const user1 = new User(1, "Rizki", 24, "SMK");
const user2 = new User(2, "Kibo", 24, "SMK");
const user3 = new User(3, "Arif", 24, "SMK");
const user4 = new User(4, "Fadillah", 24, "SMK");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

// Constructor function method
function users(id, first_name, last_name, age, isAdmin) {
  this.id = id;
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;
  this.isAdmin = false;
  this.full_name = function () {
    return this.first_name + " " + this.last_name;
  };
}
let myUser1 = new users(1, "Kibo", "Arif", 52, true);
let myUser2 = new users(2, "Kibo", "Arif", 52, true);
let myUser3 = new users(3, "Kibo", "Arif", 52, true);
console.log(myUser1);
console.log(myUser2);
console.log(myUser3);
console.log(myUser3.full_name());

// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object
