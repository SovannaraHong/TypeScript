"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myArr = ["1"];
const myArr1 = [1];
const myArr_onion = ["1", 2];
console.log(myArr);
console.log(myArr1);
console.log(myArr_onion);
let size = "Xl";
size = "M";
function Formatting(n) {
    if (typeof n === "string") {
        return parseInt(n);
    }
    else {
        return n.toString();
    }
}
console.log(Formatting("1"));
//# sourceMappingURL=onion.js.map