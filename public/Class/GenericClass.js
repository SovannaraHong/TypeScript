"use strict";
//*best practice
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    data;
    constructor(data = []) {
        this.data = data;
    }
    addData(...item) {
        this.data.push(...item);
    }
}
const newObj = new Collection();
newObj.addData({ brand: "Toyota", price: 34 });
console.log(newObj);
//# sourceMappingURL=GenericClass.js.map