const studentOne = { name: "HOngsovannara", age: 22, gender: "Male" };
const studentTwo = { name: "Leang soklin", age: 20, gender: "Female" };
const studentThree = {
    name: "Leang soklin",
    age: 20,
    gender: "Female",
};
const students = new Set();
students.add(studentOne);
students.add(studentThree);
students.add(studentOne);
function outputStudent(student) {
    student.forEach((st) => console.log(st.age));
}
outputStudent(students);
export {};
//# sourceMappingURL=examsetFun.js.map