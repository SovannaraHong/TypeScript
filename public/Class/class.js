"use strict";
// class Car {
Object.defineProperty(exports, "__esModule", { value: true });
//   fun(brand: string, model: string) {
//     this.brand = "BMW";
//     this.model = "7 Series";
//   }
//   brand:string;
//   model:string;
// }
//** option 1
//  */
class Car {
    constructor() {
        this.brand = "Toyota";
        this.model = "7 series";
    }
    brand;
    model;
}
const myCar = new Car();
console.log(myCar);
//** option 2 keep edit for your sef
//  */
class Stock {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    brand;
    model;
    price;
}
const myStock = new Stock("HOda", "kava", 2000);
console.log(myStock);
//# sourceMappingURL=class.js.map