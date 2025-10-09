class CarStock {
    constructor(brand, model, Stock) {
        this.brand = brand;
        this.model = model;
        this.Stock = Stock;
    }
}
const stockOne = new CarStock("hoda", "kava", "TOYOTA");
console.log(stockOne);
class Option {
    constructor(name, age, gender, role, phone) {
        this.feature = [];
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.role = role;
        this.phone = phone;
    }
    addFeature(feature) {
        this.feature.push(feature);
    }
}
const objMember = new Option("luffy", 20, "Male", "User", [34656]);
objMember.addFeature("HONDA");
console.log(objMember);
export {};
//# sourceMappingURL=unionWithclass.js.map