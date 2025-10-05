"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addProduct(value) {
    const id = Math.random();
    return { ...value, id };
}
const product = { brand: "HONDA", price: 2300 };
console.log(addProduct(product));
// console.log(addProduct<Product>({ brand: "HONDA", price: 2000 }));
//# sourceMappingURL=intersectionWithGene.js.map