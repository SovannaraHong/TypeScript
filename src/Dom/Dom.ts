//* use ! for not error and not null

const btn = document.querySelector("button")!;
const a = document.querySelector("a")!;

//define element tag

const heading = document.querySelector(".heading")! as HTMLHeadingElement;
heading.textContent = "hello";
// * node list

const li = document.querySelectorAll(".list")! as NodeListOf<HTMLLIElement>;

// * html collection

const list = document.getElementsByClassName(
  "list"
)! as HTMLCollectionOf<HTMLLIElement>;
