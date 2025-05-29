const accountId = 144552;
let accountEmail = "Harish@gmial.com";
var accountPass = "12345";
accountCity = "Rajasthan";

/* 
If we decleare a variable and not initialize the use of that variable then its default value is undefined
*/
let accountState;



// accountId = 2; // **We cannot change the value of const variable**

// We cannot use var variable because var has a globle variable and if we change the value of var in between our code then all same same of local varible's value is changed.That's why we always use let variable.

console.log("accountId");

accountEmail = "har123@gmail.com";
accountPass = "121212121";
accountCity = "Jaipur";

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);