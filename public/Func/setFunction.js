"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const setFun = new Set<number>();
// setFun.add(3,34,546,2,3);
// console.log(setFun);
class Collection {
    number;
    constructor(number = []) {
        this.number = number;
    }
    setFun() { }
    addNum(...num) {
        this.number.push(...num);
        this.number = Array.from(new Set(this.number));
    }
}
const obj = new Collection();
obj.addNum(3, 4, 5, 5, 3, 2, 4, 6, 7);
console.log(obj);
//# sourceMappingURL=setFunction.js.map