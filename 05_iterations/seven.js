const myNums = [1,2,3];

// const Total = myNums.reduce(function (acc, carrval) {
//     console.log(`acc: ${acc} and carrval: ${carrval}`);
//     return acc + carrval;
// }, 0);

// console.log(Total);


// const total = myNums.reduce( (acc, carrval) => acc + carrval,0);
// console.log(total);

const shoppingCart = [
    {
        itemName: "js Cource",
        price: 3999,
    },
    {
        itemName: "py Cource",
        price: 999,
    },
    {
        itemName: "java Cource",
        price: 4999,
    },
    {
        itemName: "data science Cource",
        price: 13999,
    },
];

const total = shoppingCart.reduce ( (acc, carrval) => acc + carrval.price, 0)
console.log(total);

