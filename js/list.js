import initFilter from "./filter.js";
import initShowMore from "./show_more.js";
import initHeart from "./heart.js";
import initNav from "./nav.js";
import initNavTouch from "./nav_touch.js";

window.onload = function (){
    initFilter();
    initHeart();
    initShowMore();
    initNav();
    initNavTouch();
}