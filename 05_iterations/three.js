// for of loop

let arr = [1, 2, 3, 4, 5, 6];

for(const num of arr){
    // console.log(num);
};

let greeting = "Hello World";

for(const val of greeting){
   // console.log(val);
    
}

//Map

const map = new Map();
map.set('IN', "India");
map.set('Ch', "China");
map.set('USA', "United state of america");
// console.log(map);

for (const [key, val] of map) {
    //console.log(key, ":-", val);
}


// object using for-of thorwn an error ---> (myObj is not iterable)
 const myObj = {
    game1: "Spderman",
    game2: "BGMI",
 };
for (const [key, val] of myObj) {
    console.log(key, ":-", val);
}