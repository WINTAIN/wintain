export default makeEven;

function makeEven() {
  const allItems = document.querySelectorAll(".item");
  const itemList = document.querySelector("#item_list");
  if (allItems.length % 2 != 0) {
    const blankItem = document.createElement("div");
    blankItem.classList.add("item");
    itemList.appendChild(blankItem);
  }
}
