export default initHeart;

const allItemHearts = document.querySelectorAll(".item_heart");

function changeHeartSrc(src){
    if (src.indexOf('_f') != -1){
        return src.replace("_f", "_l");
    }else{
        return src.replace("_l", "_f");
    }
}

function handleHeart(e){
    const heartImg = e.currentTarget;
    heartImg.src = changeHeartSrc(heartImg.src);
}

function initHeart(){
    for (var i=0;i<allItemHearts.length;i++){
        allItemHearts[i].addEventListener("click", handleHeart);
    }
}