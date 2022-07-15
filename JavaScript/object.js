//creating object
let person = {
  fruit: "mango",
  color: "yellow",
  quantity: 1,
  fruit2: {
    type: "apple",
    color: "green",
  },
};
//overwriting object
person.quantity = 3;

document.write(person);
console.log(person.fruit);
console.log(person.quantity);
console.log(person["color"]);
console.log(person.fruit2);
console.log(person.fruit2.type);

//constructor in object (parameterized constructor)
function person1(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
}
const father = new person1("kamal", "nath", 12);
console.log(father);
console.log(father.firstname);
console.log(father.lastname);
//default constructor
function person2() {
  this.name = "sharan";
  this.age = 23;
  this.address = "aaa";
}
const father1 = new person2();
console.log(father1.name);
