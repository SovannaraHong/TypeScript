const myArr: string[] | number[] = ["1"];
const myArr1: string[] | number[] = [1];

const myArr_onion: (string | number)[] = ["1", 2];
console.log(myArr);
console.log(myArr1);
console.log(myArr_onion);

//=========================

type Size = "Xl" | "L" | "M";

let size: Size = "Xl";
size = "M";

// cant use type s only 3 on top

// use with Array

type Check = string | number;

function Formatting(n: Check): Check {
  if (typeof n === "string") {
    return parseInt(n);
  } else {
    return n.toString();
  }
}
console.log(Formatting("1"));
