"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StockCar {
    brand;
    price;
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    addDes(des) {
        const newPrice = this.price - des;
        this.price = newPrice;
    }
}
class Car extends StockCar {
    model;
    constructor(brand, price, model) {
        super(brand, price);
        this.model = model;
    }
}
const myCar = new Car("H", 3999, "GTR");
myCar.addDes(999);
console.log(myCar);
//# sourceMappingURL=inheritClass.js.map