let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

function render(document: any) { //Or change the noImplicitAny in tsconfig file
    console.log(document);
}

let numbers = [1, 2, 3]
let num : number[] = []
numbers.forEach(n => n.toExponential) // suggestion because we already know the type 

let user: [number, string] = [1, 'Jessie']
user.push(1); // in this case, it doesn't complain which is a gap that exist at the time