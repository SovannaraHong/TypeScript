function addProduct(value) {
    const id = Math.random();
    return Object.assign(Object.assign({}, value), { id });
}
const product = { brand: "HONDA", price: 2300 };
console.log(addProduct(product));
export {};
// console.log(addProduct<Product>({ brand: "HONDA", price: 2000 }));
//# sourceMappingURL=intersectionWithGene.js.map