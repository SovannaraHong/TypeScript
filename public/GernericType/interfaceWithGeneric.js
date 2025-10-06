"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oneObj = {
    brand: "hongda",
    data: [{ brand: "nara", price: 4399 }],
};
console.log(oneObj);
const createProduct = {
    dbId: 1,
    name: "nara",
    age: 12,
    product: ["coca", "carabav", "alcohol"],
};
const createByAdmin = {
    dbId: 12,
    author: "admin",
    name: "akira_dev",
    age: 24,
    product: ["coca", "carabav", "alcohol"],
    role: [
        {
            brand: "honda",
            price: 300,
        },
    ],
};
console.log(createProduct, createByAdmin);
//# sourceMappingURL=interfaceWithGeneric.js.map