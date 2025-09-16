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
