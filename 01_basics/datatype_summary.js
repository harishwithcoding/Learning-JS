// javaScript is a dynamically typed language

// Primitive

// 7 types: number, string, boolean, null, undefined, symbol, bigInt

const score = 100;                    // number
const name = "Harish";                // string
const userLoggedIn = false;           // boolean
let city;                             // undefined
let state = null;                     // null
const id = Symbol('123');             //Symbol
const anotherId = Symbol('123');

console.log(id === anotherId);

// Non-Primitive (Reference)

// Array , Objects, Funcctions

// Array

let heros = ["Shaktiman", "Chotta Bheem", "Mighty Raju"];

// Object

let myInfo = {
    name: "Harish verma",
    age: 23,
};

// functions

const myfun = function(){
    console.log("hello world");
}