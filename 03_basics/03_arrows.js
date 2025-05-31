const user = {
    username: "Harish",
    price: 1223,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  
        // console.log(this);
          
    } 
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// const chai = function(){
//     let username = "harish0;"
//     console.log(this.username);
// }
 

/******************************** Arrow Function ******************************* */
const chai = () => {
    let username = "harish0;"
    console.log(this.username);
}

// chai();

// const add2 = (num1, num2) =>{
//     return num1 + num2;
// } 

// implicit return 

// const add2 = (num1, num2) => num1 + num2;
// const add2 = (num1, num2) => (num1 + num2);


const add2 = (num1, num2) => ({username: "Harish"}); // Object return
console.log(add2(5,6));