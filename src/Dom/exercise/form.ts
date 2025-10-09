const form = document.querySelector("form")!;
const inputEmail = document.querySelector("#input-email")! as HTMLInputElement;
const inputName = document.querySelector("#input-name")! as HTMLInputElement;
const data = document.querySelector("#data")!;

form.addEventListener("submit", (e: Event): void => {
  e.preventDefault();
  const email = inputEmail.value;
  const name = inputName.value;
  addList(name, email);
  inputEmail.value = "";
  inputName.value = "";
});
function addList(name: string, email: string): void {
  const h1 = document.querySelector("h1")!;
  h1.textContent = `${name} ${email}`;
  document.body.appendChild(h1);
}
