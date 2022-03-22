import initHscroll from "./h_scroll.js";
import initVscroll from "./v_scroll.js";
import initNav from "./nav.js";
import initNavTouch from "./nav_touch.js";

initNav();
initNavTouch();
initHscroll();
initVscroll();

const footer = document.querySelector("footer");
if (footer) {
  const bankInfoText = document.querySelector("#bank_info_text");
  bankInfoText.addEventListener("click", function () {
    alert("은행정보가 복사됐습니다.");
  });
  new ClipboardJS("#bank_info_text");
}

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
