"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//data type
let userName = "Hong Sovannara";
let number = 34;
let isStudent = true;
let a; //null it empty
let b; //undefined it dont know
console.log(userName);
//==============================
// object==========================
const user = {
    id: 1,
    name: "hong sovannara",
    isStudent: true,
};
//testing function ===============
const sum = (salary) => {
    const sumSalary = salary.reduce((ac, cu) => {
        return ac + cu;
    });
    return sumSalary;
};
console.log(sum([10, 20, 30, 40, 50, 60]));
//# sourceMappingURL=app.js.map