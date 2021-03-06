export default initNav;

const transparentLayer = document.querySelector("#transparent_layer");
const nav = document.querySelector("nav");
const switchHamb = document.querySelector("#fixed_hamburger");

let navSwitch = true;

const topBread = document.querySelector("#top_bread");
const patty = document.querySelector("#patty");
const bottomBread = document.querySelector("#bottom_bread");

const hambTransitionTime = 200;

function handleSwitch(e) {
  if (navSwitch) {
    activateNav(e);
  } else {
    inactivateNav(e);
  }
}

function activateNav() {
  nav.classList.remove("inactive_nav");
  makeOneLine();
  setTimeout(makeX, hambTransitionTime);
  transparentLayer.classList.remove("inactive_transparent_layer");
  showTransParentLayer();
  navSwitch = false;
}

function inactivateNav() {
  nav.classList.add("inactive_nav");
  makeOneLine();
  setTimeout(makeThreeLine, hambTransitionTime);
  setTimeout(hideTransparentLayer, hambTransitionTime * 2);
  transparentLayer.classList.add("inactive_transparent_layer");
  navSwitch = true;
}

function hideTransparentLayer() {
  transparentLayer.classList.add("hide_to_back");
}

function showTransParentLayer() {
  transparentLayer.classList.remove("hide_to_back");
}

function makeOneLine() {
  topBread.classList.remove("X_1");
  patty.classList.remove("X_2");
  bottomBread.classList.remove("X_2");
  topBread.classList.add("one_line");
  patty.classList.add("one_line");
  bottomBread.classList.add("one_line");
}

function makeThreeLine() {
  topBread.classList.remove("one_line");
  patty.classList.remove("one_line");
  bottomBread.classList.remove("one_line");
  topBread.classList.remove("X_1");
  patty.classList.remove("X_2");
  bottomBread.classList.remove("X_2");
}

function makeX() {
  topBread.classList.add("X_1");
  patty.classList.add("X_2");
  bottomBread.classList.add("X_2");
}

function initNav() {
  switchHamb.addEventListener("click", handleSwitch);
}
