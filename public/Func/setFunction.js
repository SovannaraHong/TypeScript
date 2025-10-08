"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const setFun = new Set<number>();
// setFun.add(3,34,546,2,3);
// console.log(setFun);
//* add item []arr
// class Collection<T> {
//   constructor(public data: T[]) {}
//   addData(...item: T[]): void {
//     this.data.push(...item);
//   }
// }
// const obj = new Collection<string>(["hdfdlfd", "rdfd"]);
// obj.addData("dhhkhfd", "dfhksh");
// console.log(obj);
//* add item arr obj
class Collection {
    data;
    constructor(data) {
        this.data = data;
    }
    addData(...item) {
        this.data.push(...item);
    }
}
const obj = new Collection([
    {
        brand: "hello",
        price: 34,
    },
]);
obj.addData({ brand: "wwe", price: 200 });
console.log(obj);
//# sourceMappingURL=setFunction.js.map