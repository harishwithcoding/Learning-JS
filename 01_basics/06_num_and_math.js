const num1 = 400;
// console.log(num1);

const num2 = new Number(400);
// console.log(num2);

// console.log(num2.toString());
// console.log(typeof num2.toString()); // Output: string

// console.log(num2.toFixed(2)); // Output: 400.00

const rupies = 1000000;
// console.log(rupies.toLocaleString()); // Use US number system
// console.log(rupies.toLocaleString('en-IN')); // Now its indian number system


/******************************** Maths *********************************/

console.log(Math);
// console.log(Math.abs(-4)); // This is use for converting negative value into positive.
// console.log(Math.round(4.3));
// console.log(Math.min(4,5,34,365,62,1));
// console.log(Math.max(3,45,3,23,54,34,24,25,53));

// console.log(Math.random());
// console.log(Math.round(Math.random()*10) + 1);

let a = 15;
let b = 29;

console.log(Math.round(Math.random() * (b - a + 1)) + a);





