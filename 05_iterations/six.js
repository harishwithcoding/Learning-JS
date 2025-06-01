const programming = ["js", "cpp", "ry","py", "java"];

const values = programming.forEach( (item) =>{
    // console.log(item);
} );

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter( (num) => {
    // num > 5; // if you not use return keyword then t will gives you only empty object.
    return num > 4;
} );
console.log(newNums);
