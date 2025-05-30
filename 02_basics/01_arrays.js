let arr = [0, 1, 2, 3, 4, 5];
// let arr2 = ["Harish", "Anup", "Lavish"];
// let arr3 = new Array(1,2,3,4,5);
// console.log(arr[2]);


// Array Methods
arr.push(6);
arr.pop();
arr.unshift(8);
arr.shift();

// console.log(arr.includes(3));
// console.log(arr.indexOf(3));

const newArr = arr.join(); // join method convert array into sting.

console.log(arr);
console.log(newArr);
console.log(typeof newArr);

// slice splice
console.log( "A ", arr);

const arr1 = arr.slice(1, 3); // slice method make a copy do changes on this copy file.
console.log(arr1);
console.log( "B ", arr);

const arr2 = arr.splice(1, 3); // splice method remove form real array.
console.log(arr2);
console.log( "C ", arr);





