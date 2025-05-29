const name = "Harish";
const age = 23;

// console.log(`My name is ${name} and my age is ${age}.`);
// console.log(`My name is ${name.toUpperCase()} and my age is ${age}.`);

// Another method of declare String

const myName = new String("Harishverma");
// console.log(myName);
// console.log(myName.length);

// We can find a chatacter in specific index in our String using charAt().
// console.log(myName.charAt(4));

// We can find a specific character in our String using indexOf().
// console.log(myName.indexOf("r"));

const newName = myName.substring(0, 6);
console.log(newName);


const anotherName = myName.slice(0, 6);
console.log(anotherName);

// If we want to remove unused spaces in our string then use trim().

const str = "    harish     ";
console.log(str);
console.log(str.trim());

