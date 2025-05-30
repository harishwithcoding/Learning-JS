// Object literals

const jsUser = {
    name: "Harish",
    age: 23,
    email: "Hari734000@gmail.com",
    city: "Sri Ganganagar",
    loggedIn: false,
    lastLoggedIn: ["Monday","Sunday"]
};

//console.log(jsUser.email); // this is the first way to access object 
//console.log(jsUser[email]);  // this is an error because object takes all keys as an string thats why we need to use "" to access keys values.
// console.log(jsUser["email"]);

// How to use symbol in objects

const mysym = Symbol("harish");

const jsUser2 = {
    name: "Harish",
//  mysym: "harishverma", // This is not decleared not as a symbol we need to use [] this for  declared symbol in objects
    [mysym]: "Harish verma", // now it is react as a symbol
    age: 23,
    email: "Hari734000@gmail.com",
    city: "Sri Ganganagar",
    loggedIn: false,
    lastLoggedIn: ["Monday","Sunday"]
};

// console.log(jsUser2[mysym]);

// Change object value

jsUser2.email = "Myname@gmail.com";

  // this is use to freeze the value of any object if w apply this then no one cannot change the value of the object.
// Object.freeze(jsUser2);
jsUser2.email = "anup@gmail.com"; // this change not done because we do apply freeze method.

// console.log(jsUser2["email"]);

jsUser2.greeting = function(){
    console.log("Hello JS users");
}
console.log(jsUser2.greeting);
console.log(jsUser2.greeting());
 

jsUser2.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);
}
console.log(jsUser2.greeting2());



