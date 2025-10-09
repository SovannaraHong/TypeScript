const ul = document.querySelector(".container_list")!;

function addList(list: string): void {
  const li = document.createElement("li")!;

  li.append(list);
  ul.appendChild(li);
}
addList("Hello");
