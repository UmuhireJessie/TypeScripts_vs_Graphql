let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

function render(document: any) {
  //Or change the noImplicitAny in tsconfig file
  console.log(document);
}

let numbers = [1, 2, 3];
let num: number[] = [];
numbers.forEach((n) => n.toExponential); // suggestion because we already know the type

let user: [number, string] = [1, "Jessie"];
user.push(1); // in this case, it doesn't complain which is a gap that exist at the time

// const small = 1
// const medium = 2
// const large = 3

//PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

type Employee = {
    readonly id: number;
    name: string; // make it optional or initialise it to ''
    retire: (date: Date) => void;
}

let employee: Employee = {
  id: 1,
  name: "Jessie",
  retire: (date: Date) => {
    console.log(date);
  },
};

function KgToLbs(weight: number | string): number {
    // Narroowing
    if (typeof weight == 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2 
}
KgToLbs(10)
KgToLbs('10kg')

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100;

function greet(name: string | null | undefined) {
    if (name)
    console.log(name.toUpperCase());
    else 
        console.log('Hola!')
}

greet(undefined)

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday : new Date() }
}

let customer = getCustomer(1)
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

//Optional call
let log: any = null
log?.('a')  // log(a) is going to give us a TypeError