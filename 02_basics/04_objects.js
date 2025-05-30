// singleton

// const tindderUser = new Object();


const tindderUser = {};
tindderUser.id = "123abc";
tindderUser.name = "harry";
tindderUser.loggedIn = false;
// console.log(tindderUser);


const regularUser = {
    email: "User1@gmial.com",
    full_name: {
        userFullName:{
            firstName: "Harish",
            lastName: "Verma",
        }
    }
}

// console.log(regularUser.full_name.userFullName.firstName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tindderUser));
// console.log(Object.values(tindderUser));

const course = {
    coursename: "JavaScript",
    price: 999,
    courseinstructure: "Harish",
}

// course.courseinstructure

const {courseinstructure} = course;
console.log(courseinstructure);
