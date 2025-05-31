// const email = "h@google.in";
// if (email) {
//     console.log(`Got email`);
// } else{
//     console.log(`Not get email`);   
// };

// falsy valse

// false, 0, -0, null, undefined, "", NaN BigInt 0n;

// Truthy value

// "0", " ", 'false', function(){}, [], {};


// const email = [];

// if(email.length === 0){
//     console.log("Array is empty");
// }

// const email = {};

// if(Object.keys(email).length === 0){
//     console.log("Object is empty");
    
// }


// Nullish Operator (??)

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;


console.log(val1);

// Terniary Operator

// condition ? ture : false

let price = 100;
price <= 80 ? console.log("Less then 80") : console.log("greater then 80");


