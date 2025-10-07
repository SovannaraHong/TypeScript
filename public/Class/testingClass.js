"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    constructor(name, gender, age) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    name;
    gender;
    age;
    role = [];
    addRole(role) {
        this.role.push(role);
    }
}
const checkOne = new Group("Nara", "Male", 239);
checkOne.addRole("can  add delete change and remove");
console.log(checkOne);
//# sourceMappingURL=testingClass.js.map