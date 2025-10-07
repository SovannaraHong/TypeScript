type Manager = {
  author: string;
};
class Group {
  constructor(name: string, gender: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  name: string;
  gender: string;
  age: number;
  role: string[] = [];
  addRole(role: string): void {
    this.role.push(role);
  }
}
const checkOne = new Group("Nara", "Male", 239);
checkOne.addRole("can  add delete change and remove");
console.log(checkOne);
