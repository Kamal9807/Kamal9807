var msg = "hello this is javascript code";
var name = "kamal";

var message = "hello this" + message + "done by";

alert("Welcome");
let x = 4;
let y = 2;
let z = x * y;
document.write(z);
console.log(message);
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

//arrays
let employee = ["one", "two", "three"];
employee[4] = "four";
console.log(employee);
console.log(employee[2]);
console.log(employee.length);

//function
function helicopter(code) {
  //set of statement
  var message = "hello this " + code + " done by";
  console.log(message);
}
helicopter("tell");

function add(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
add(23, 52);

//operators
number1 = 5;
number2 = 10;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(++number1);
console.log(--number2);
console.log(number1 + 3);
console.log(number1 < number2); //relational operator
console.log(number1 === number2); // equality operator
console.log(number1 !== number2);

//ternary operator
let personage = 12;
let type = personage > 18 ? "Adult Ticket" : "Child Ticket";
console.log(type);
//if class
let age = 19;
if (age > 15) {
  document.write("adult");
} else {
  document.write("child");
}

let hour = Date();
console.log(hour);

//String methods
///string length
let str1 =
  "But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.";
let output = str1.length;
console.log(output);
///slice method
let str2 = "once up a time there lived a ghost";
hello = str2.slice(29);
hello2 = str2.slice(5, 20);
hello3 = str2.slice(-12, -8);
console.log(hello);
console.log(hello2);
console.log(hello3);
//sub string
sub1 = str2.substring(29);
console.log(sub1);
let str3 = str2.toUpperCase();
console.log(str3);
let str4 = str2.toLocaleUpperCase();
console.log(str4);
let str5 = str4.toLocaleLowerCase();
console.log(str5);

//concat
let per1 = "kamal";
let per2 = "nath";
let result = per1.concat(per2);
console.log(result);

//trim
let per3 = "    Kamal     ";
let per4 = per3.trim();
console.log(per4);
//padding
let per5 = "kamal";
let per6 = per5.padEnd(9, "nath");
console.log(per6);
//number to string
let per7 = 123;
let per8 = per7.toString();
let per9 = per8.padStart(5, "temple");
console.log(per9);
console.log(per5.charAt(3));
console.log(per5.split(" "));
