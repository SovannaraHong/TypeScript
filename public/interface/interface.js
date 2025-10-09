// interface use shape of object------------------------
const objectUser = {
    id: 1,
    name: "nara",
    text: "hello from tyscript",
    tag: ["html", "css"],
    date: new Date(),
};
console.log(objectUser);
const userRead = {
    dbId: 1,
    name: "nara",
};
const M_fun = {
    id: 1,
    Greeting: () => {
        console.log("hello");
    },
};
console.log(M_fun);
const my_Arr = [
    {
        id: 1,
        author: "nara",
    },
    {
        id: 2,
        author: "nara",
    },
    {
        id: 3,
        author: "nara",
    },
];
console.log(my_Arr);
// function myObj(p:{id:number; author:string}):void{
// }
function myObj(p) {
    console.log(`hello ${p.id} ${p.author}`);
}
myObj({ id: 1, author: "nar" });
const user1 = {
    name: "Hong Sovannara",
    email: "nara",
};
const admin = {
    role: "admin",
    name: "nara",
    email: "admin@124",
};
console.log(user1);
console.log(admin);
const member = {
    name: "nara",
    age: 2,
    gender: "Male",
};
const leaderAdmin = {
    author: "admin",
    name: "akira",
    age: 35,
    gender: "male",
};
console.log("this is admin ship", leaderAdmin);
console.log(`this is member ship`, member);
export {};
//# sourceMappingURL=interface.js.map