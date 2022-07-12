//arrays
let employee = ["one", "two", "three"];
employee[4] = "four";
console.log(employee);
console.log(employee[2]);
console.info(employee[0]);
console.error(employee[5]);
console.log(employee.length);

const bike = ["fz", "Honda", "TVS", "yamaha"];
const cars = ["BMW", "Hundai", "TATA", "Honda"];
let BikeCars = bike.concat(cars);
window.console.log(BikeCars);

// filter() method

function canVote(age) {
  return age >= 18;
}
function func() {
  let filtered = [24, 33, 16, 40].filter(canVote);
  document.write("people eligible for voting ");
  document.write(filtered);
}
func();

let numb = [-87, 12, 1, 4, 0, 23];
let check = numb.filter(NumberCheck);
console.log(check);

function NumberCheck(number6) {
  return number6 > 0;
}

//map() function
let numb2 = [4, 8, 16, 25];
let k1 = numb2.map(Math.sqrt);
console.log(k1);

let numbs = [2, 3, 1, 12];
let k2 = numbs.map(numarr);
console.log(k2);
function numarr(tables) {
  return tables * 5;
}

let rate = [1500, 1221, 2131, 4744, 2134, 2452, 1234];
let newrate = rate.map(Math.sqrt);
console.log(newrate);

//custom arrow function
const string = "Kamalnath";
const stringArr = string.split("");

let asciiArr = stringArr.map((x) => x.charCodeAt(0));
console.log(stringArr);
console.log(asciiArr);

//reduce() method
const numbers = [2, 3, 10];
let value = numbers.reduce(reducefunction);
function reducefunction(total, numm) {
  return total - numm;
}
console.info(value);

//for each in array
let text = "";
let color = ["red", "green", "yellow", "blue"];
let output = color.forEach(forFunction);
console.info(text);
function forFunction(item, index) {
  text = text + item;
}

function foreachloop() {
  const items = [65, 22, 12];
  const outputvalue = [];

  items.forEach(function (item) {
    outputvalue.push(item * 5);
  });
  console.log(outputvalue);
}
foreachloop();
