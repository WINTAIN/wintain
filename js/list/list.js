import initFilter from "./filter.js";
import initShowMore from "./show_more.js";
import initHeart from "./heart.js";
import makeEven from "./even_item.js"

window.onload = function (){
    makeEven();
    initFilter();
    initHeart();
    initShowMore();
}