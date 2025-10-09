const form = document.querySelector("form");
const inputEmail = document.querySelector("#input-email");
const inputName = document.querySelector("#input-name");
const data = document.querySelector("#data");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const name = inputName.value;
    addList(name, email);
    inputEmail.value = "";
    inputName.value = "";
});
function addList(name, email) {
    const h1 = document.querySelector("h1");
    h1.textContent = `${name} ${email}`;
    document.body.appendChild(h1);
}
export {};
//# sourceMappingURL=form.js.map