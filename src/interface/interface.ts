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

//it can update  id it onlyread
// use ? in text it optional

//=================================

//method interface

interface Method {
  id: number;
  name?: string;
  Greeting(): void;
}

const Mfun: Method = {
  id: 1,
  Greeting: () => {
    console.log("hello");
  },
};

console.log(Mfun);

//====================

//inter face arry object
interface Arr {
  id: number;
  auther: string;
}
const myArrr: Arr[] = [
  {
    id: 1,
    auther: "nara",
  },
  {
    id: 2,
    auther: "nara",
  },
  {
    id: 3,
    auther: "nara",
  },
];
console.log(myArrr);

//=======================

//use interface in function have paramater is object
interface FunObj {
  id: number;
  auther: string;
}
// function myObj(p:{id:number; auther:string}):void{

// }
function myObj(p: FunObj): void {
  console.log(`hello ${p.id} ${p.auther}`);
}

myObj({ id: 1, auther: "nar" });

//===============================
//exstence -----------------

interface User {
  name: string;
  email: string;
}
interface IMembership extends User {
  role: string;
}
const user1: User = {
  name: "Hong Sovannar",
  email: "nara",
};
const admin: IMembership = {
  role: "admin",
  name: "nara",
  email: "admin@124",
};
console.log(user1);
console.log(admin);
