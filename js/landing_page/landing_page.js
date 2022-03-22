import initStamp from "./stamp.js";
import initSubScribeModels from "./subscribe_model.js";
import initPhilo from "./philosophy.js";
import initHeader from "./header.js";

window.onload = function () {
  initPhilo();
  initSubScribeModels();
  initHeader();
  initStamp(); //stamp must be last beacuse of sleep function
};
