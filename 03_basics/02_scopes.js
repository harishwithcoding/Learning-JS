
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;    
// }

// console.log(a); // this is thrown an error because in if a is a local variable 
// console.log(b); // this is thrown an error because in if b is a local variable

// console.log(c); // this is not thrown an error because its scope is a globle scope that is not good for coding for ex. if we use var c before if condition and also use var c in if condition then c valse is overright and if we print result outside the if condition then it display's the overright value.


/****************************************Nested scope*************************************** */

function one(){
    const username = "Harish";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}
// one();


if(true){
    const username = "Harish";
    if(true){
        const website = " YouTuber";
        // console.log(username + website);
    };
    // console.log(website); // this is error because of scope problem
};

// console.log(username); // this is error because of scope problem


// function addOne(num){
//     return num + 1;
// }

// addOne(4);

// const addTwo = function (num){
//     return num + 2;
// }

// addTwo(5);


addOne(4); // if we calling before the declration in this type of function then it is called.
function addOne(num){
    return num + 1;
}


addTwo(5); // But if we caliing this function before declared then it thrown an error.
const addTwo = function (num){
    return num + 2;
}

