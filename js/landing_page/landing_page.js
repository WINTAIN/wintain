import initStamp from "./stamp.js";
import initSubScribeModels from "./subscribe_model.js";
import initPhilo from "./philosophy.js";
import initHeader from "./header.js";

window.onload = function (){
    initStamp();
    initPhilo();
    initSubScribeModels();
    initHeader();
}