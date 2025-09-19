"use strict";
// interface use shape of object------------------------
Object.defineProperty(exports, "__esModule", { value: true });
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
const Mfun = {
    id: 1,
    Greeting: () => {
        console.log("hello");
    },
};
console.log(Mfun);
const myArrr = [
    {
        id: 1,
        auther: "nara",
    },
    {
        id: 2,
        auther: "nara",
    },
    {
        id: 3,
        auther: "nara",
    },
];
console.log(myArrr);
// function myObj(p:{id:number; auther:string}):void{
// }
function myObj(p) {
    console.log(`hello ${p.id} ${p.auther}`);
}
myObj({ id: 1, auther: "nar" });
const user1 = {
    name: "Hong Sovannar",
    email: "nara",
};
const admin = {
    role: "admin",
    name: "nara",
    email: "admin@124",
};
console.log(user1);
console.log(admin);
//# sourceMappingURL=interface.js.map