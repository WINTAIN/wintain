export default initShowMore;

import makeEven from "./even_item.js";

const testItem1 = document.querySelectorAll(".item")[0];
const testItem2 = document.querySelectorAll(".item")[1];

const itemList = document.querySelector("#item_list");

const showMore = document.querySelector("#show_more");

function addItems() {
  for (var i = 0; i < 4; i++) {
    const cloneItem1 = testItem1.cloneNode(true);
    const cloneItem2 = testItem2.cloneNode(true);
    itemList.appendChild(cloneItem1);
    itemList.appendChild(cloneItem2);
  }
  makeEven();
}

function handleShowMore(e) {
  // const itemLineNumbers = document.querySelectorAll(".item").length/2;
  // const itemLineHeight = itemList.clientHeight/itemLineNumbers;
  addItems();
  // const newItemLineNumbers = document.querySelectorAll(".item").length/2;
  // e.currentTarget.style=`max-height:${newItemLineNumbers * itemLineHeight}px;`;
}

function initShowMore() {
  showMore.addEventListener("click", handleShowMore);
}
