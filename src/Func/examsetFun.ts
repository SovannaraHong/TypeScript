interface Student {
  name: string;
  age: number;
  gender: string;
}

const studentOne: Student = { name: "HOngsovannara", age: 22, gender: "Male" };
const studentTwo: Student = { name: "Leang soklin", age: 20, gender: "Female" };
const studentThree: Student = {
  name: "Leang soklin",
  age: 20,
  gender: "Female",
};
const students = new Set<Student>();
students.add(studentOne);
students.add(studentThree);
students.add(studentOne);
function outputStudent(student: Set<Student>): void {
  student.forEach((st) => console.log(st.age));
}
outputStudent(students);
