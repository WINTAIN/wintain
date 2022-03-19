export default initCheck;


const allCheckLines = document.querySelectorAll(".check_line");

function changeOnOffSrc(src){
    if (src.indexOf('_on') != -1){
        return src.replace("_on", "_off");
    }else{
        return src.replace("_off", "_on");
    }
}

function handleCheckLineClick(e){
    const checkCircle = e.currentTarget.querySelector("img");
    checkCircle.src = changeOnOffSrc(checkCircle.src);
}

function initCheck(){
    for(var i=0; i<allCheckLines.length; i++){
        allCheckLines[i].addEventListener("click", handleCheckLineClick);
    }
}