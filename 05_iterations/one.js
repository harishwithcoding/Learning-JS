// For Loop

// for ( let i = 1; i<= 10; i++){
//     console.log(i);
// };

for ( let i = 1; i<= 10; i++){
    if (i==5) {
        // console.log("5 is best number.");
        continue;
        
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i} is:`);
    for (let j = 1; j <=10; j++) {
            // console.log(`inner loop valu is ${j}, outer loop value is ${i}`);
            // console.log(`${i} * ${j} = ${i*j}`);
    }
};

const myArray = ["Flash", "superman", "batman"];

for(let i = 0; i< myArray.length; i++){
    let element = myArray[i];
    // console.log(element); 
};

// Break statement are useful to break the loop, if we want to break any loop in between when a specific no. or statement are matched then we use break statement. 

for (let index = 1; index <= 10; index++) {

    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`value of index is ${index}`);
};



// Continue statement are use to leave a specific statement and other all loop are executed correctly, theb we use continue statement because continue if a specific statement are matched then it will leave this statement and other all statements are execute correctly
for (let index = 1; index <= 10; index++) {

    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of index is ${index}`);
}