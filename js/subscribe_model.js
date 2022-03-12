const subscribeModelButtons = document.querySelectorAll(".subscribe_model_button");

function activateSubscribeModel(e){
    e.currentTarget.parentNode.querySelector(".subscribe_model_month_num").classList.add('subscribe_model_act');
    e.currentTarget.parentNode.querySelector(".subscribe_model_button").classList.add('subscribe_model_act');
}

function iactivateSubscribeModel(e){
    e.currentTarget.parentNode.querySelector(".subscribe_model_month_num").classList.remove('subscribe_model_act');
    e.currentTarget.parentNode.querySelector(".subscribe_model_button").classList.remove('subscribe_model_act');
}


export default function initSubScribeModels(){
    for (var i=0; i<subscribeModelButtons.length; i++){
        subscribeModelButtons[i].addEventListener("touchstart", activateSubscribeModel);
        subscribeModelButtons[i].addEventListener("touchend", iactivateSubscribeModel);
    }
}