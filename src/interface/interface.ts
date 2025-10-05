// interface use shape of object------------------------

interface Post {
  id: number;
  name: string;
  text: string;
  tag: string[];
  date: Date;
}
const objectUser: Post = {
  id: 1,
  name: "nara",
  text: "hello from tyscript",
  tag: ["html", "css"],
  date: new Date(),
};
console.log(objectUser);

//readonly and optional=======================

interface Read {
  readonly dbId: number;
  name: string;
  text?: string;
}

const userRead: Read = {
  dbId: 1,
  name: "nara",
};
// userRead.dbId=3
// userRead.name

//it cant update  id it onlyread
// use ? in text it optional

//=================================

//method interface

interface Method {
  id: number;
  name?: string;
  Greeting(): void;
}

const M_fun: Method = {
  id: 1,
  Greeting: () => {
    console.log("hello");
  },
};

console.log(M_fun);

//====================

//inter face arry object
interface Arr {
  id: number;
  author: string;
}
const my_Arr: Arr[] = [
  {
    id: 1,
    author: "nara",
  },
  {
    id: 2,
    author: "nara",
  },
  {
    id: 3,
    author: "nara",
  },
];
console.log(my_Arr);

//=======================

//use interface in function have parameter is object
interface FunObj {
  id: number;
  author: string;
}
// function myObj(p:{id:number; author:string}):void{

// }
function myObj(p: FunObj): void {
  console.log(`hello ${p.id} ${p.author}`);
}

myObj({ id: 1, author: "nar" });

//===============================
//extent -----------------

interface User {
  name: string;
  email: string;
}
interface IMembership extends User {
  role: string;
}
const user1: User = {
  name: "Hong Sovannara",
  email: "nara",
};
const admin: IMembership = {
  role: "admin",
  name: "nara",
  email: "admin@124",
};
console.log(user1);
console.log(admin);

interface AdminType extends userType {
  author: string;
}

interface userType {
  name: string;
  age: number;
  gender: string;
}

const member: userType = {
  name: "nara",
  age: 2,
  gender: "Male",
};
const leaderAdmin: AdminType = {
  author: "admin",
  name: "akira",
  age: 35,
  gender: "male",
};
console.log("this is admin ship", leaderAdmin);
console.log(`this is member ship`, member);
