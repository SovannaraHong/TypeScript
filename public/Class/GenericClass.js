"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Obj {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feature = [];
    addFeature(a, b) {
        this.feature.push(a + b);
    }
}
const numPlus = new Obj("Nara", 43);
numPlus.addFeature(3, 2);
console.log(numPlus);
class GenericClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const myClass = new GenericClass("nara", 45);
console.log(myClass);
//# sourceMappingURL=GenericClass.js.map