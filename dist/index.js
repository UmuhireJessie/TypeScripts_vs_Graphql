"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;

function render(document) {
  console.log(document);
}

let numbers = [1, 2, 3];
let num = [];
numbers.forEach((n) => n.toExponential);

let user = [1, "Jessie"];
user.push(1);

let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10000);

let employee = {
  id: 1,
  name: "Jessie",
  retire: (date) => {
    console.log(date);
  },
};
//# sourceMappingURL=index.js.map
