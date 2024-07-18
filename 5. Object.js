const person = {
  firstName: "Muhamad Rizki",
  lastName: "Arif Fadillah",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
console.log(person.firstName);
console.log(person.lastName);
