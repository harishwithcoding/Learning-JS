function sayHello(){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
};

// sayHello(); // only sayHello is a reference of a function but sayHello is a function calling.

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(4,7);

// Return type function

function add(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}
const result = add(4, 6)

// console.log("result: ", result);

// function userLoggedIn(username) {
//     return `${username} just logged in.`;
// }


// function userLoggedIn(username) {
//     if(username === undefined){
//         console.log("Please enter a username.");
//         return;
//     };
//     return `${username} just logged in.`;
// }
// console.log(userLoggedIn("Harish"));


function userLoggedIn(username = "user") {
    if(username === undefined){
        console.log("Please enter a username.");
        return;
    };
    return `${username} just logged in.`;
}

console.log(userLoggedIn());
