export default initFilter;

function changeOnOffSrc(src){
    if (src.indexOf('_on') != -1){
        return src.replace("_on", "_off");
    }else{
        return src.replace("_off", "_on");
    }
}

const allCheckElems = document.querySelectorAll(".filter_elem");
const allColorElems = document.querySelectorAll(".filter_color");

function handleCheckClick(e){
    const checkImg = e.currentTarget.querySelector("img");
    checkImg.src = changeOnOffSrc(checkImg.src)
}

function handleColorClick(e){
    const checkImg = e.currentTarget.querySelector("img");
    checkImg.src = changeOnOffSrc(checkImg.src)
}

function initFilter(){
    for (var i=0; i<allCheckElems.length; i++){
        allCheckElems[i].addEventListener("click", handleCheckClick);
    }
    for (var i=0; i<allColorElems.length; i++){
        allColorElems[i].addEventListener("click", handleColorClick);
    }
}

