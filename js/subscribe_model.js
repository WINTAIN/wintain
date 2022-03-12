const subscribeModelButtons = document.querySelectorAll(".subscribe_model_button");
const darkRightArrowSrc = "https://wintainstorage.s3.ap-northeast-2.amazonaws.com/uploads/icons/arrow_right_d.png";
const blueRightArrowSrc = "https://wintainstorage.s3.ap-northeast-2.amazonaws.com/uploads/icons/arrow_right_b.png";

function activateSubscribeModel(e){
    e.currentTarget.classList.add('subscribe_model_act');
    e.currentTarget.querySelector("img").src=blueRightArrowSrc;
}

function iactivateSubscribeModel(e){
    e.currentTarget.classList.remove('subscribe_model_act');
    e.currentTarget.querySelector("img").src=darkRightArrowSrc;
}


export default function initSubScribeModels(){
    for (var i=0; i<subscribeModelButtons.length; i++){
        subscribeModelButtons[i].addEventListener("touchstart", activateSubscribeModel);
        subscribeModelButtons[i].addEventListener("mousedown", activateSubscribeModel);
        subscribeModelButtons[i].addEventListener("touchend", iactivateSubscribeModel);
        subscribeModelButtons[i].addEventListener("mouseup", iactivateSubscribeModel);
    }
}