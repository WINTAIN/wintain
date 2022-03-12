import initHscroll from "./h_scroll.js";
import initVscroll from "./v_scroll.js";
import initStamp from "./stamp.js";
import initSubScribeModels from "./subscribe_model.js";
import initPhilo from "./philosophy.js";
import initNav from "./nav.js";
import initHeader from "./header.js";
import initNavTouch from "./nav_touch.js";

window.onload = function (){
    initNav();
    initNavTouch();
    initStamp();
    initHscroll();
    initVscroll();
    initHeader();
    initPhilo();
    initSubScribeModels();
}