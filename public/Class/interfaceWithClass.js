"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    brand;
    Id;
    price;
    constructor(brand, Id, price) {
        this.brand = brand;
        this.Id = Id;
        this.price = price;
    }
    CalDes(des) {
        const newDes = this.price - des;
        this.price = newDes;
    }
}
class Stock extends Product {
    model;
    qty;
    constructor(brand, Id, price, model, qty) {
        super(brand, Id, price);
        this.model = model;
        this.qty = qty;
    }
    show_Bulling() {
        return `Hello from implement`;
    }
    stockProduct = [];
    addStock(...stock) {
        this.stockProduct.push(...stock);
    }
}
const objOne = new Stock("Provida", 1, 2000, "Water", 20);
objOne.addStock({
    brand: "HONDA",
    Id: 2,
    price: 2500,
    model: "AHSONG",
    qty: 5,
});
objOne.CalDes(300);
objOne.show_Bulling();
console.log(objOne);
//# sourceMappingURL=interfaceWithClass.js.map