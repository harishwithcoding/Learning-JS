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


// function userLoggedIn(username = "user") {
//     if(username === undefined){
//         console.log("Please enter a username.");
//         return;
//     };
//     return `${username} just logged in.`;
// }

// console.log(userLoggedIn());

// If we don't know how many numbers are present in our function then we use rest (...) operator.
// for ex. if we are doing shopping then we were add multiple numbers of item in cart is that case coder don't know how many items are added in cart item. In that case we use rest operator. And this operator makes an array of totel items price.

// function calculateCartPrice(...totalprice){
//     return totalprice;
// };

// console.log(calculateCartPrice(100, 200, 500, 1000));


// function calculateCartPrice(val1 , val2, ...totalprice){
//     return totalprice;
// };

// console.log(calculateCartPrice(100, 200, 500, 1000)); // now val1 takes 100, val2 takes 200 and ...totalprice take another all numbers.

const user ={
    username: "Harish",
    price: 199,
};

function handleObjects(anyobjet){
   console.log(`the user is ${anyobjet.username} and the price is ${anyobjet.price}`);
};

// handleObjects(user);

const myNewArray = [100, 200, 300, 500, 1000];

function returnSecondValue(getarray){
    return getarray[1];
};

console.log(returnSecondValue(myNewArray));



