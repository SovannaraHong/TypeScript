//data type
let userName: string = "Hong Sovannara";
let number: number = 34;
let isStudent: boolean = true;

let a: null; //null it empty
let b: undefined; //undefined it dont know
console.log(userName);

//==============================

// object==========================
const user: { id: number; name: string; isStudent: boolean } = {
  id: 1,
  name: "hong sovannara",
  isStudent: true,
};

//testing function ===============

const sum = (salary: number[]): number => {
  const sumSalary = salary.reduce((ac, cu) => {
    return ac + cu;
  });
  return sumSalary;
};
console.log(sum([10, 20, 30, 40, 50, 60]));
