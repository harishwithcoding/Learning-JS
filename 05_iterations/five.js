const programming = ["js", "cpp", "ry","py", "java"];

// programming.forEach( function (val) {
//     console.log(val);
// } )

// programming.forEach( (val) =>{
//     console.log(val);
    
// } )

// function primtMe (item){
//     console.log(item);
// };

// programming.forEach(primtMe);


const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js",
    },
    {
        languageName: "Python",
        languageFile: "py",
    },
    {
        languageName: "java",
        languageFile: "java",
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFile);
    
} )