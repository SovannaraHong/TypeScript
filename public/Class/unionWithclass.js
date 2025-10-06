"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarStock {
    constructor(brand, model, Stock) {
        this.brand = brand;
        this.model = model;
        this.Stock = Stock;
    }
    brand;
    model;
    Stock;
}
const stockOne = new CarStock("hoda", "kava", "TOYOTA");
console.log(stockOne);
class Option {
    constructor(name, age, gender, role, phone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.role = role;
        this.phone = phone;
    }
    name;
    age;
    gender;
    role;
    phone;
    feature = [];
    addFeature(feature) {
        this.feature.push(feature);
    }
}
const objMember = new Option("luffy", 20, "Male", "User", [34656]);
objMember.addFeature("HONDA");
console.log(objMember);
//# sourceMappingURL=unionWithclass.js.map