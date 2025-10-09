class Group {
    constructor(name, gender, age) {
        this.role = [];
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    addRole(role) {
        this.role.push(role);
    }
}
const checkOne = new Group("Nara", "Male", 239);
checkOne.addRole("can  add delete change and remove");
console.log(checkOne);
export {};
//# sourceMappingURL=testingClass.js.map