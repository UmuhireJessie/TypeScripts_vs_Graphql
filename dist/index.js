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
    if (taxYear < 2022)
        return income * 1.2;
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

function KgToLbs(weight) {
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs('10kg');

let textBox = {
    drag: () => { },
    resize: () => { }
};

let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map