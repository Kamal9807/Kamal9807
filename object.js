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
